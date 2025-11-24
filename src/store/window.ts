import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "~/constants";
import type { Window } from "~/types/window";

interface WindowStore {
  windows: Record<string, Window>;
  nextZIndex: number;
  openWindow: (windowKey: string, data?: unknown) => void;
  closeWindow: (windowKey: string) => void;
  focusWindow: (windowKey: string) => void;
}

export const useWindowStore = create(immer<WindowStore>((set) => ({
  windows: WINDOW_CONFIG,
  nextZIndex: INITIAL_Z_INDEX + 1,

  openWindow: (windowKey: string, data = null) => set((state) => {
    const win = state.windows[windowKey];
    if (!win) return;
    
    win.isOpen = true;
    win.zIndex = state.nextZIndex;
    win.data = data ?? win.data;
    state.nextZIndex++;
  }),
  closeWindow: (windowKey: string) => set((state) => {
    const win = state.windows[windowKey];
    if (!win) return;

    win.isOpen = false;
    win.zIndex = INITIAL_Z_INDEX;
    win.data = null;
    
  }),
  focusWindow: (windowKey: string) => set((state) => {
    const win = state.windows[windowKey];
    if (!win) return;

    win.zIndex = state.nextZIndex++;
  }),
})));
