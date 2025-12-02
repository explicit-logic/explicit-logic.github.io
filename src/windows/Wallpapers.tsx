import { WindowWrapper } from "~/hoc/WindowWrapper";
import { WindowControls } from "~/components/WindowControls";

const Wallpapers = () => {
  return (
    <div className="flex h-full w-full flex-col bg-white text-black">
      <div id="window-header">
        <WindowControls target="wallpapers" />
        <p className="w-full text-center">Wallpapers</p>
      </div>

      <div className="flex-1 overflow-hidden">
        <iframe
          src="/wallpapers/index.html"
          title="Wallpapers"
          className="h-full w-full border-0"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        />
      </div>
    </div>
  );
};

export const WallpapersWindow = WindowWrapper(Wallpapers, "wallpapers");
