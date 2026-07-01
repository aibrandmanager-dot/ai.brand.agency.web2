-- AI Brand Agency: Database Trigger to send Email Notifications via Resend
-- Paste this script into your Supabase SQL Editor (https://supabase.com -> Dashboard -> SQL Editor -> New Query).
-- Make sure to replace the placeholder API key and recipient email with your actual values.

-- 1. Enable the pg_net extension in Supabase (essential for asynchronous, non-blocking HTTP requests)
create extension if not exists pg_net with schema extensions;

-- 2. Create the notification trigger function
create or replace function public.send_contact_notification()
returns trigger as $$
declare
  -- IMPORTANT: Replace with your actual Resend API Key (starts with re_...)
  resend_api_key text := 're_YOUR_RESEND_API_KEY';
  
  -- IMPORTANT: Replace with the email address where you want to receive notifications
  recipient_email text := 'ai.brand.manager@gmail.com';
  
  email_payload jsonb;
begin
  -- Build the JSONB payload for Resend API
  -- Note: Resend.dev sandboxed domain allows sending from 'onboarding@resend.dev' to your verified account email.
  -- If you connect your own custom domain to Resend, you can change the 'from' field to 'kontakt@yourdomain.pl'.
  email_payload := jsonb_build_object(
    'from', 'AI Brand Agency Form <onboarding@resend.dev>',
    'to', array[recipient_email],
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

  -- Use pg_net to send the HTTP POST request asynchronously.
  -- This runs in the background, finishes instantly, and does not block the transaction or wait for the API response.
  begin
    perform net.http_post(
      url := 'https://api.resend.com/emails',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || resend_api_key
      ),
      body := email_payload
    );
  exception when others then
    -- Log warning inside DB if pg_net queue fails
    raise warning 'Failed to queue Resend notification: %', SQLERRM;
  end;

  return new;
end;
$$ language plpgsql security definer;

-- 3. Bind the function to run after inserts in contact_requests table
drop trigger if exists on_contact_request_insert on public.contact_requests;
create trigger on_contact_request_insert
  after insert on public.contact_requests
  for each row execute function public.send_contact_notification();

-- 4. Verify trigger setup message
select 'Resend database trigger successfully configured via pg_net!' as status;
