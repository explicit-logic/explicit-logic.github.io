export type Location = {
  id: number;
  type: string;
  name: string;
  icon: string;
  kind: string;
  children?: LocationChild[];
};

export type LocationChild = {
  id: number;
  imageUrl?: string;
  fileType?: string;
  href?: string;
  position?: string;
  subtitle?: string;
  image?: string;
  name: string;
  icon: string;
  kind: string;
  description?: string[];
  windowPosition?: string;
  children?: LocationChild[];
};
