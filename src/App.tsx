import { Navbar } from "~/components/Navbar";
import { Welcome } from "~/components/Welcome";
import { Dock } from "~/components/Dock";
import { TerminalWindow } from "~/windows/Terminal";
import { SafariWindow } from "~/windows/Safari";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <SafariWindow />
      <TerminalWindow />
    </main>
  );
};

export default App;
