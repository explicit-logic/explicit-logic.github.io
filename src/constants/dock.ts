export type DockBlock = DockApp | Divider;

type AppId = typeof DOCK_APP_IDS[keyof typeof DOCK_APP_IDS];

export type DockApp = {
  id: AppId;
  name: string;
  icon: string;
  canOpen: boolean;
  
}

export type Divider = {
  id: typeof DIVIDER_ID;
};

export const DIVIDER_ID = "divider";

export const DOCK_APP_IDS = {
  APPARTMENT: "appartment",
  LIGHT_PASS: "light_pass",
  SPOT_SERVE: "spot_serve",
  WALLPAPER: "wallpaper",


  CONTACT: "contact",
  FINDER: "finder",
  PHOTOS: "photos",
  SAFARI: "safari",
  TERMINAL: "terminal",
  TRASH: "trash",
} as const;

const DIVIDER: Divider = {
  id: DIVIDER_ID,
};

export const DOCK_APPS: DockBlock[] = [
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
    id: DOCK_APP_IDS.APPARTMENT,
    name: "Appartment",
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
  //   id: DOCK_APP_IDS.WALLPAPER,
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
