import { APPS, type App } from "~/constants/desktop";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import { useWindowStore } from "~/store/window";
import { useLocationStore } from "~/store/location";

export const Home = () => {
  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const handleOpenProjectFinder = (app: App) => {
    setActiveLocation(app);
    openWindow("finder", app);
  };

  useGSAP(() => {
    Draggable.create(".app");
  }, []);

  return (
    <section id="home">
      <ul>
        {APPS.map((app) => (
          <li
            key={app.id}
            className={`group app ${app.position}`}
            onClick={() => handleOpenProjectFinder(app)}
          >
            <img src={app.icon} alt={app.name} className="w-16" />
            <p>{app.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
