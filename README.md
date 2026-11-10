# Portfolio

## Now Playing widget

The Now Playing widget uses Last.fm scrobbling data. Create a Last.fm API
application at https://www.last.fm/api/account and add these variables to the
Vercel project under **Settings → Environment Variables**:

```env
VITE_LASTFM_API_KEY=your_lastfm_api_key
VITE_LASTFM_USERNAME=your_lastfm_username
VITE_SERVICE_ID=your_emailjs_service_id
VITE_TEMPLATE_ID=your_emailjs_template_id
VITE_PUBLIC_KEY=your_emailjs_public_key
```

`VITE_LASTFM_API_KEY` and `VITE_LASTFM_USERNAME` power the Now Playing widget.
The three EmailJS variables power the contact form; get them from your EmailJS
service, email template, and account settings.

Enable the variables for **Production** (and **Preview** if needed), then
redeploy. The Last.fm username must be the account that is connected to the
music app you use for scrobbling.

For local development, copy `.env.example` to `.env.local` and replace the
placeholder values. Never commit `.env.local` or an actual API key.