import { PROJECT_IDS } from "./projects";
import { LINK_ID } from "./common";
import { DIVIDER, type Divider } from "./common";

interface Base {
  name: string;
  icon: string;
  canOpen?: boolean;
}

export interface App extends Base {
  id: typeof DOCK_APP_IDS[keyof typeof DOCK_APP_IDS];
}

interface Link extends Base {
  id: typeof LINK_ID;
  href: string;
}

export type DockApp = App | Link | Divider;

export const DOCK_APP_IDS = {
  ...PROJECT_IDS,

  CONTACT: "contact",
  FINDER: "finder",
  PHOTOS: "photos",
  SAFARI: "safari",
  TERMINAL: "terminal",
  TRASH: "trash",
} as const;

export const DOCK_APPS: DockApp[] = [
  {
    id: DOCK_APP_IDS.FINDER,
    name: "Portfolio",
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: DOCK_APP_IDS.SAFARI,
    name: "Articles",
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: DOCK_APP_IDS.PHOTOS,
    name: "Gallery",
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: DOCK_APP_IDS.CONTACT,
    name: "Contact",
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: DOCK_APP_IDS.TERMINAL,
    name: "Skills",
    icon: "terminal.png",
    canOpen: true,
  },
  DIVIDER,
  {
    id: LINK_ID,
    href: "https://appartement.icu",
    name: "Appartement",
    icon: "apps/appartement.png",
    canOpen: true,
  },
  // {
  //   id: DOCK_APP_IDS.LIGHT_PASS,
  //   name: "Light Pass",
  //   icon: "apps/light-pass.png",
  //   canOpen: true,
  // },
  // {
  //   id: DOCK_APP_IDS.SPOT_SERVE,
  //   name: "Spot Serve",
  //   icon: "apps/spot-serve.png",
  //   canOpen: true,
  // },
  // {
  //   id: DOCK_APP_IDS.WALLPAPERS,
  //   name: "Wallpapers",
  //   icon: "apps/wallpapers.png",
  //   canOpen: true,
  // },
  DIVIDER,
  {
    id: DOCK_APP_IDS.TRASH,
    name: "Archive",
    icon: "trash.png",
    canOpen: false,
  },
];
