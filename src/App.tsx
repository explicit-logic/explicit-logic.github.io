import { Navbar } from "~/components/Navbar";
import { Welcome } from "~/components/Welcome";
import { Home } from "~/components/Home";
import { Dock } from "~/components/Dock";
import { ContactWindow } from "~/windows/Contact";
import { ResumeWindow } from "~/windows/Resume";
import { TerminalWindow } from "~/windows/Terminal";
import { SafariWindow } from "~/windows/Safari";
import { FinderWindow } from "~/windows/Finder";
import { TextWindow } from "~/windows/Text";
import { ImageWindow } from "~/windows/Image";
import { MarkdownWindow } from "~/windows/Markdown";
import { PhotosWindow } from "~/windows/Photos";
import { WallpapersWindow } from "~/windows/Wallpapers";
import { ShortsWindow } from "~/windows/Shorts";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <ContactWindow />
      <FinderWindow />
      <ResumeWindow />
      <SafariWindow />
      <TerminalWindow />
      <TextWindow />
      <ImageWindow />
      <MarkdownWindow />
      <PhotosWindow />
      <WallpapersWindow />
      <ShortsWindow />

      <Home />

      {/* <a
        href="https://unsplash.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-5 right-5 text-white/50 text-xs hover:text-white transition-colors z-0"
      >
        @Unsplash
      </a> */}
    </main>
  );
};

export default App;
