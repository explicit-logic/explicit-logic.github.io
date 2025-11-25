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

      <Home />
    </main>
  );
};

export default App;
