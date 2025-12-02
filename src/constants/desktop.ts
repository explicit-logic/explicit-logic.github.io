import { PROJECT_IDS, type ProjectId } from "./projects";
import { LINK_ID } from "./common";

interface Base {
  name: string;
  icon: string;
  position: string;
}

interface Link extends Base {
  id: typeof LINK_ID;
  href: string;
}
 interface Project extends Base {
  id: ProjectId;
};

export type App = Link | Project;

export const APPS: App[] = [
  {
    id: LINK_ID,
    href: "https://appartement.icu",
    name: "Appartement",
    icon: "/images/apps/appartement.png",
    position: "top-[5vh] left-5", 
  },
  {
    id: LINK_ID,
    href: "https://github.com/explicit-logic/light-pass",
    name: "Light Pass",
    icon: "/images/apps/light-pass.png",
    position: "top-[20vh] left-7",
  },
  {
    id: PROJECT_IDS.WALLPAPERS,
    name: "Wallpapers",
    icon: "/images/apps/wallpapers.png",
    position: "top-[35vh] left-7",
  },
  {
    id: LINK_ID,
    href: "https://github.com/explicit-logic/spot-serve-gui",
    name: "Spot Serve",
    icon: "/images/apps/spot-serve.png",
    position: "top-[60vh] left-7",
  },
];
