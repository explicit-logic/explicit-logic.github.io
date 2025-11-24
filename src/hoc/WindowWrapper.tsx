import { useWindowStore } from "~/store/window";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";

export const WindowWrapper = <P extends object>(
  Component: React.ComponentType<P>,
  windowKey: string
) => {
  const Wrapped = (props: P) => {
    const { windows, focusWindow } = useWindowStore();
    const ref = useRef<HTMLDivElement>(null);
    const win = windows[windowKey];

    useGSAP(() => {
      const el = ref.current;
      if (!el || !win.isOpen) return;

      el.style.display = "block";

      gsap.fromTo(
        el,
        {
          scale: 0.8,
          opacity: 0,
          y: 40,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
        }
      );
    }, [win.isOpen]);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      const [instance] = Draggable.create(el, {
        onPress: () => focusWindow(windowKey),
      });

      return () => {
        instance.kill();
      };
    }, [win.isOpen]);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;

      el.style.display = win.isOpen ? "block" : "none";
    }, [win.isOpen]);
    if (!win) return null;
    const { zIndex } = win;

    return (
      <section id={windowKey} className="absolute" ref={ref} style={{ zIndex }}>
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
};
