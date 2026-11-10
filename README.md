# Portfolio

## Now Playing widget

The Now Playing widget uses Last.fm scrobbling data. Create a Last.fm API
application at https://www.last.fm/api/account and add these variables to the
Vercel project under **Settings → Environment Variables**:

```env
VITE_LASTFM_API_KEY=your_lastfm_api_key
VITE_LASTFM_USERNAME=your_lastfm_username
```

Enable them for **Production** (and **Preview** if needed), then redeploy.
The Last.fm username must be the account that is connected to the music app
you use for scrobbling.

For local development, copy `.env.example` to `.env.local` and replace the
placeholder values. Never commit `.env.local` or an actual API key.