import { useState } from "react";
import { Play } from "lucide-react";
import { WindowWrapper } from "~/hoc/WindowWrapper";
import { WindowHeader } from "~/components/WindowHeader";
import { useWindowStore } from "~/store/window";
import type { LocationChild } from "~/types/location";

const getEmbedId = (inputUrl: string) => {
  try {
    if (!inputUrl) return null;
    // Handle simple ID input
    if (inputUrl.length === 11 && !inputUrl.includes("/")) return inputUrl;

    const urlObj = new URL(inputUrl);
    if (urlObj.pathname.startsWith("/shorts/")) {
      return urlObj.pathname.split("/shorts/")[1];
    }
    if (urlObj.searchParams.has("v")) {
      return urlObj.searchParams.get("v");
    }
    // Handle youtu.be/ID
    if (urlObj.hostname === "youtu.be") {
      return urlObj.pathname.slice(1);
    }
  } catch (e) {
    console.error(e);
  }
  return null;
};

const Shorts = () => {
  const { windows } = useWindowStore();
  const win = windows["shorts"];
  const data = win?.data as LocationChild | null;
  const isOpen = win?.isOpen;

  const [url, setUrl] = useState("");
  // Default to a scenic/tech short or just empty. Let's start empty to encourage interaction.
  const [embedId, setEmbedId] = useState<string | null>(null);

  const [href, setHref] = useState(data?.href);

  if (data?.href !== href) {
    setHref(data?.href);
    if (data?.href) {
      const id = getEmbedId(data.href);
      if (id) {
        setEmbedId(id);
        setUrl(data.href);
      }
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = getEmbedId(url);
    if (id) setEmbedId(id);
  };

  if (!isOpen && (embedId !== null || url !== "")) {
    setEmbedId(null);
    setUrl("");
  }

  return (
    <div className="flex h-full w-full flex-col bg-black text-white">
      <WindowHeader target="shorts">
        <p className="w-full text-center">Shorts</p>
      </WindowHeader>

      <div className="flex p-2 gap-2 bg-zinc-900 border-b border-zinc-800">
        <form onSubmit={handleSubmit} className="flex w-full gap-2">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste YouTube Short URL..."
            className="flex-1 bg-zinc-800 border border-zinc-700 rounded-md px-3 py-1 text-sm text-white focus:outline-none focus:ring-1 focus:ring-red-500"
          />
          <button
            type="submit"
            className="bg-red-600 px-3 py-1 rounded-md text-white hover:bg-red-700 transition-colors flex items-center justify-center"
          >
            <Play className="w-4 h-4 fill-white" />
          </button>
        </form>
      </div>

      <div className="flex-1 flex items-center justify-center bg-black overflow-hidden relative w-full">
        {embedId && isOpen ? (
          <iframe
            src={`https://www.youtube.com/embed/${embedId}?autoplay=1&rel=0`}
            title="YouTube Short"
            className="h-full aspect-9/16 shadow-2xl"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="text-zinc-500 flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center">
              <Play className="w-8 h-8 opacity-50 fill-zinc-500" />
            </div>
            <p className="text-sm font-medium">Enter a URL to play</p>
          </div>
        )}
      </div>
    </div>
  );
};

export const ShortsWindow = WindowWrapper(Shorts, "shorts");
