import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { SiYoutubemusic } from "react-icons/si";
import { fetchNowPlaying, cleanTitle } from "../api/lastfm";

const POLL_INTERVAL = 30_000;

export default function NowPlaying() {
  const [track, setTrack] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;
    async function load() {
      const data = await fetchNowPlaying();
      if (cancelled) return;
      if (data) {
        setTrack(data);
        setStatus(data.nowPlaying ? "playing" : "recent");
      } else {
        setStatus("offline");
      }
    }
    load();
    const id = setInterval(load, POLL_INTERVAL);
    return () => { cancelled = true; clearInterval(id); };
  }, []);

  if (status === "offline") return null;

  const text = status === "loading"
    ? null
    : `${cleanTitle(track?.title ?? "")}${track?.artist ? ` · ${track.artist}` : ""}`;

  return (
    <div className="inline-flex flex-col items-center gap-1">
      {/* Label */}
      <div className="flex items-center gap-1">
        <SiYoutubemusic size={9} className={status === "playing" ? "text-red-500" : "text-gray-600"} />
        <span className="text-[9px] uppercase tracking-widest text-gray-500">
          {status === "playing" ? "now playing" : "last played"}
        </span>
        {status === "playing" && (
          <motion.span
            className="w-1 h-1 rounded-full bg-red-500"
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </div>

      {/* Capsule */}
      <motion.a
        href={
          track
            ? `https://music.youtube.com/search?q=${encodeURIComponent(`${track.title} ${track.artist}`)}`
            : "https://music.youtube.com"
        }
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-3 py-1.5 rounded-full bg-gray-900/40 backdrop-blur-md border border-white/10 hover:border-white/20 hover:bg-gray-900/60 transition-colors duration-300 no-underline"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {text === null ? (
          <span className="inline-block w-32 h-2 bg-gray-700/60 rounded animate-pulse align-middle" />
        ) : (
          <span className="text-[11px] text-gray-300 truncate max-w-[220px]">{text}</span>
        )}
      </motion.a>
    </div>
  );
}
