-- AI Brand Agency: Database Trigger to send Email Notifications via Resend
-- Paste this script into your Supabase SQL Editor (https://supabase.com -> Dashboard -> SQL Editor -> New Query).
-- Make sure to replace the placeholder API key and recipient email with your actual values.

-- 1. Enable the pg_net extension (without specifying schema, to avoid conflicts if already installed)
create extension if not exists pg_net;

-- 2. Clean up any previous trigger or function definitions to prevent conflicts
drop trigger if exists on_contact_request_insert on public.contact_requests;
drop function if exists public.send_contact_notification();

-- 3. Create the notification trigger function using pg_net
create or replace function public.send_contact_notification()
returns trigger as $$
declare
  -- IMPORTANT: Replace with your actual Resend API Key (starts with re_...)
  resend_api_key text := 're_YOUR_RESEND_API_KEY';
  
  -- IMPORTANT: Replace with the email address where you want to receive admin notifications
  admin_email text := 'ai.brand.manager@gmail.com';
  
  admin_email_payload jsonb;
  client_email_payload jsonb;
begin
  -- 1. Build the payload for the ADMIN notification email
  admin_email_payload := jsonb_build_object(
    'from', 'AI Brand Agency Form <kontakt@ai-brand-agency.pl>',
    'to', array[admin_email],
    'subject', 'Nowa wycena: ' || coalesce(new.imie, 'Klient') || ' (' || coalesce(new.firma, '-') || ')',
    'html', '<h3>Masz nowe zgłoszenie z formularza kontaktowego!</h3>' ||
            '<table style="width:100%; border-collapse:collapse; font-family:sans-serif; font-size:14px; margin-top:15px;">' ||
              '<tr style="background:#f9f9f9;"><td style="padding:8px; border:1px solid #eee; font-weight:bold; width:120px;">Imię:</td><td style="padding:8px; border:1px solid #eee;">' || coalesce(new.imie, '-') || '</td></tr>' ||
              '<tr><td style="padding:8px; border:1px solid #eee; font-weight:bold;">Firma:</td><td style="padding:8px; border:1px solid #eee;">' || coalesce(new.firma, '-') || '</td></tr>' ||
              '<tr style="background:#f9f9f9;"><td style="padding:8px; border:1px solid #eee; font-weight:bold;">Branża:</td><td style="padding:8px; border:1px solid #eee;">' || coalesce(new.branza, '-') || '</td></tr>' ||
              '<tr><td style="padding:8px; border:1px solid #eee; font-weight:bold;">Budżet:</td><td style="padding:8px; border:1px solid #eee; font-weight:bold; color:#ff5a1f;">' || coalesce(new.budzet::text, '0') || ' zł</td></tr>' ||
              '<tr style="background:#f9f9f9;"><td style="padding:8px; border:1px solid #eee; font-weight:bold;">E-mail:</td><td style="padding:8px; border:1px solid #eee;"><a href="mailto:' || coalesce(new.email, '') || '">' || coalesce(new.email, '-') || '</a></td></tr>' ||
              '<tr><td style="padding:8px; border:1px solid #eee; font-weight:bold;">Telefon:</td><td style="padding:8px; border:1px solid #eee;">' || coalesce(new.telefon, '-') || '</td></tr>' ||
              '<tr style="background:#f9f9f9;"><td style="padding:8px; border:1px solid #eee; font-weight:bold;">Strona WWW:</td><td style="padding:8px; border:1px solid #eee;">' || coalesce(new.strona, '-') || '</td></tr>' ||
              '<tr><td style="padding:8px; border:1px solid #eee; font-weight:bold; vertical-align:top;">Wiadomość:</td><td style="padding:8px; border:1px solid #eee; white-space:pre-wrap;">' || coalesce(new.wiadomosc, '-') || '</td></tr>' ||
            '</table>'
  );

  -- Use pg_net to queue the admin email asynchronously
  begin
    perform net.http_post(
      url := 'https://api.resend.com/emails',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || resend_api_key
      ),
      body := admin_email_payload
    );
  exception when others then
    raise warning 'Failed to queue admin notification: %', SQLERRM;
  end;

  -- 2. Build and queue the CLIENT confirmation receipt email (if client email is present)
  if new.email is not null and new.email like '%@%' then
    client_email_payload := jsonb_build_object(
      'from', 'AI Brand Agency <kontakt@ai-brand-agency.pl>',
      'to', array[new.email],
      'subject', 'Dziękujemy za zgłoszenie — AI Brand Agency',
      'html', '<div style="font-family:sans-serif; line-height:1.6; color:#111; max-width:600px; margin:0 auto; padding:20px;">' ||
                '<h2 style="color:#ff5a1f; font-weight:500; margin-bottom:16px;">Dzień dobry ' || coalesce(new.imie, '') || '!</h2>' ||
                '<p>Dziękujemy za kontakt z AI Brand Agency. Pomyślnie otrzymaliśmy Twoje zapytanie ofertowe dotyczące strony dla firmy <strong>' || coalesce(new.firma, '') || '</strong>.</p>' ||
                '<p>Nasz zespół już analizuje przesłane dane i przygotowuje wstępny plan wdrożenia. Skontaktujemy się z Tobą w ciągu najbliższych 24 godzin.</p>' ||
                '<hr style="border:0; border-top:1px solid #eee; margin:24px 0;">' ||
                '<p style="font-size:12px; color:#666;">Wiadomość została wygenerowana automatycznie przez formularz kontaktowy. Prosimy na nią nie odpowiadać bezpośrednio.</p>' ||
                '<p style="font-weight:600; color:#ff5a1f; margin-top:20px;">Pozdrawiamy,<br>Zespół AI Brand Agency</p>' ||
              '</div>'
    );

    begin
      perform net.http_post(
        url := 'https://api.resend.com/emails',
        headers := jsonb_build_object(
          'Content-Type', 'application/json',
          'Authorization', 'Bearer ' || resend_api_key
        ),
        body := client_email_payload
      );
    exception when others then
      raise warning 'Failed to queue client confirmation: %', SQLERRM;
    end;
  end if;

  return new;
end;
$$ language plpgsql security definer;

-- 4. Bind the function to run after inserts in contact_requests table
create trigger on_contact_request_insert
  after insert on public.contact_requests
  for each row execute function public.send_contact_notification();

-- 5. Verify trigger setup message
select 'Resend database trigger successfully configured via pg_net!' as status;
