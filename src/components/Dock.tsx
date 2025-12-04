import { useRef } from "react";
import { Tooltip } from "react-tooltip";
import { DIVIDER_ID, LINK_ID } from "~/constants/common";
import { DOCK_APPS, type App } from "~/constants/dock";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useWindowStore } from "~/store/window";

export const Dock = () => {
  const { openWindow, closeWindow, windows } = useWindowStore();
  const dockRef = useRef<HTMLDivElement>(null);
  const toggleApp = (app: App) => {
    if (!app.canOpen) return;

    const win = windows[app.id];

    if (!win) return;

    if (win.isOpen) {
      closeWindow(app.id);
    } else {
      openWindow(app.id);
    }
  };

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return;

    gsap.from(dock, {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power2.out",
    });

    const icons = dock.querySelectorAll(".dock-icon");

    const animateIcons = (mouseX: number) => {
      const { left } = dock.getBoundingClientRect();

      icons.forEach((icon) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect();
        const center = iconLeft - left + width / 2;
        const distance = Math.abs(mouseX - center);
        const intensity = Math.exp(-(distance ** 2.5) / 2000);
        gsap.to(icon, {
          scale: 1 + 0.25 * intensity,
          y: -15 * intensity,
          duration: 0.2,
          ease: "power1.out",
        });
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { left } = dock.getBoundingClientRect();
      animateIcons(e.clientX - left);
    };
    const resetIcons = () => {
      icons.forEach((icon) => {
        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power1.out",
        });
      });
    };

    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", resetIcons);

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", resetIcons);
    };
  }, []);

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {DOCK_APPS.map((app, index) => {
          if (app.id === DIVIDER_ID) {
            return (
              <div key={index} className="relative flex justify-center">
                <div className="w-px h-12 3xl:h-16 bg-white/30 self-center mx-1" />
              </div>
            );
          }

          if (app.id === LINK_ID) {
            return (
              <div key={index} className="relative flex justify-center">
                <a
                  aria-label={app.name}
                  data-tooltip-id="dock-tooltip"
                  data-tooltip-content={app.name}
                  data-tooltip-delay-show={150}
                  href={app.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dock-icon"
                >
                  <img
                    src={`/images/${app.icon}`}
                    alt={app.name}
                    loading="lazy"
                    className="w-12"
                  />
                </a>
              </div>
            );
          }

          return (
            <div key={index} className="relative flex justify-center">
              <button
                type="button"
                className="dock-icon"
                aria-label={app.name}
                data-tooltip-id="dock-tooltip"
                data-tooltip-content={app.name}
                data-tooltip-delay-show={150}
                disabled={!app.canOpen}
                onClick={() => toggleApp(app)}
              >
                <img
                  src={`/images/${app.icon}`}
                  alt={app.name}
                  loading="lazy"
                  className={app.canOpen ? "" : "opacity-60"}
                />
              </button>
            </div>
          );
        })}
        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
};
