export interface App {
  id: number;
  name: string;
  icon: string;
  kind: string;
  position: string;
};

export const APPS: App[] = [
  {
    id: 1,
    name: "Appartement",
    icon: "/images/apps/appartement.png",
    kind: "folder",
    position: "top-[5vh] left-5", 
  },
  {
    id: 2,
    name: "Light Pass",
    icon: "/images/apps/light-pass.png",
    kind: "folder",
    position: "top-[20vh] left-7",
  },
  {
    id: 3,
    name: "Wallpapers",
    icon: "/images/apps/wallpapers.png",
    kind: "folder",
    position: "top-[35vh] left-7",
  },
  {
    id: 4,
    name: "Spot Serve",
    icon: "/images/apps/spot-serve.png",
    kind: "folder",
    position: "top-[60vh] left-7",
  },
];
