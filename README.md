# Threadwise

Never lose track of the conversations, commitments, and follow-ups behind your work.

## Run locally

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Populate `.env.local` with your Supabase project URL and publishable key. The key is safe for browser use; never use a Supabase `service_role` key in this app.

## Authentication setup

The interface uses Supabase Auth for email OTP and Google authentication.

1. In Supabase **Authentication → URL Configuration**, add `http://localhost:3000/**` and your production URL to Redirect URLs.
2. In **Authentication → Email Templates → Magic Link / OTP**, use `{{ .Token }}` in the template body to send a six-digit code rather than a magic link.
3. In Google Cloud, create a Web OAuth client. Add your app origin and add `https://YOUR_PROJECT_REF.supabase.co/auth/v1/callback` as its authorized redirect URI.
4. Enable Google in Supabase **Authentication → Providers → Google**, then paste in the Google client ID and secret.

Google runs inside a small popup and returns to `/auth/popup-callback`; configure that exact route as an allowed redirect URL in Supabase.
