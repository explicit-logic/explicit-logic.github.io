import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations } from "~/constants";
import type { Location, LocationChild } from "~/types/location";

const DEFAULT_LOCATION = locations.work;

interface LocationStore {
  activeLocation: Location | LocationChild;
  setActiveLocation: (location: Location | LocationChild) => void;
  resetActiveLocation: () => void;
}

export const useLocationStore = create(immer<LocationStore>((set) => ({
  activeLocation: DEFAULT_LOCATION,
  setActiveLocation: (location) => set((state) => {
    state.activeLocation = location;
  }),

  resetActiveLocation: () => set((state) => {
    state.activeLocation = DEFAULT_LOCATION;
  }),
})));
