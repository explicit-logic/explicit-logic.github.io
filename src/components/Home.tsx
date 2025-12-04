import { APPS, type App } from "~/constants/desktop";
import { LINK_ID } from "~/constants/common";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import { useWindowStore } from "~/store/window";

export const Home = () => {
  const { openWindow, closeWindow, windows } = useWindowStore();

  const toggleApp = (app: App) => {
    const win = windows[app.id];

    if (!win) return;

    if (win.isOpen) {
      closeWindow(app.id);
    } else {
      openWindow(app.id);
    }
  };

  useGSAP(() => {
    Draggable.create(".app");
  }, []);

  return (
    <section id="home">
      <ul>
        {APPS.map((app, index) =>
          app.id === LINK_ID ? (
            <li key={index} className={`group app ${app.position}`}>
              <a href={app.href} target="_blank" rel="noopener noreferrer">
                <img src={app.icon} alt={app.name} className="w-16" />
              </a>
              <p>{app.name}</p>
            </li>
          ) : (
            <li
              key={index}
              className={`group app ${app.position}`}
              onClick={() => toggleApp(app)}
            >
              <img src={app.icon} alt={app.name} className="w-16" />
              <p>{app.name}</p>
            </li>
          )
        )}
      </ul>
    </section>
  );
};
