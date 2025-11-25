import { locations } from "~/constants";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import { useWindowStore } from "~/store/window";
import { useLocationStore } from "~/store/location";
import type { LocationChild } from "~/types/location";

const projects = locations.work.children ?? [];

export const Home = () => {
  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const handleOpenProjectFinder = (project: LocationChild) => {
    setActiveLocation(project);
    openWindow("finder", project);
  };

  useGSAP(() => {
    Draggable.create(".folder");
  }, []);

  return (
    <section id="home">
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className={`group folder ${project.windowPosition}`}
            onClick={() => handleOpenProjectFinder(project)}
          >
            <img src="/images/folder.png" alt={project.name} />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
