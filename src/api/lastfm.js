const API_KEY = import.meta.env.VITE_LASTFM_API_KEY;
const USERNAME = import.meta.env.VITE_LASTFM_USERNAME;

const TITLE_CLEANUP_PATTERNS = [
  /\(official\s*(music\s*)?video\)/gi,
  /\[official\s*(music\s*)?video\]/gi,
  /\(official\s*audio\)/gi,
  /\[official\s*audio\]/gi,
  /\|\s*official\s*(music\s*)?video/gi,
  /\|\s*official\s*audio/gi,
  /\(lyric\s*video\)/gi,
  /\[lyric\s*video\]/gi,
  /\(lyrics\)/gi,
  /\[lyrics\]/gi,
  /\(audio\)/gi,
  /\[audio\]/gi,
  /\(visualizer\)/gi,
  /\[visualizer\]/gi,
  /\(official\)/gi,
  /\[official\]/gi,
  /4k/gi,
];

export function cleanTitle(raw) {
  let title = raw;
  for (const pattern of TITLE_CLEANUP_PATTERNS) {
    title = title.replace(pattern, "");
  }
  return title.replace(/\s{2,}/g, " ").trim();
}

export async function fetchNowPlaying() {
  if (!API_KEY || !USERNAME) return null;
  try {
    const url =
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks` +
      `&user=${encodeURIComponent(USERNAME)}&api_key=${API_KEY}&format=json&limit=1`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();

    const track = data?.recenttracks?.track?.[0];
    if (!track) return null;

    const isNowPlaying = track["@attr"]?.nowplaying === "true";
    const albumArt =
      track.image?.find((i) => i.size === "extralarge")?.["#text"] ||
      track.image?.find((i) => i.size === "large")?.["#text"] ||
      "";

    return {
      title: track.name,
      artist: track.artist?.["#text"] ?? "",
      album: track.album?.["#text"] ?? "",
      albumArt: albumArt || null,
      nowPlaying: isNowPlaying,
      url: track.url ?? null,
    };
  } catch {
    return null;
  }
}
