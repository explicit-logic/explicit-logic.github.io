export const PROJECT_IDS = {
  APPARTEMENT: "appartement",
  LIGHT_PASS: "light_pass",
  WALLPAPERS: "wallpapers",
  SPOT_SERVE: "spot_serve",
} as const;

export type ProjectId = typeof PROJECT_IDS[keyof typeof PROJECT_IDS];

