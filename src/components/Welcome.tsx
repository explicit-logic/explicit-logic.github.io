import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const FONT_WEIGHTS = {
  subtitle: {
    min: 100,
    max: 400,
    default: 500,
  },
  title: {
    min: 400,
    max: 900,
    default: 400,
  },
} as const;

const renderText = (text: string, className: string, baseWeight = 400) => {
  return [...text].map((char, index) => (
    <span
      key={index}
      className={className}
      style={{ fontVariationSettings: `"wght" ${baseWeight}` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const setupTextHover = (
  container: HTMLDivElement | null,
  type: keyof typeof FONT_WEIGHTS
) => {
  if (!container) return () => {};

  const letters = container.querySelectorAll("span");

  const { min, max, default: base } = FONT_WEIGHTS[type];
  const animateLetter = (
    letter: HTMLSpanElement,
    weight: number = base,
    duration = 0.25
  ) => {
    return gsap.to(letter, {
      duration,
      ease: "power2.out",
      fontVariationSettings: `"wght" ${weight}`,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;
    letters.forEach((letter) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w / 2));
      const intensity = Math.exp(-(distance ** 2) / 2000);
      animateLetter(letter, min + (max - min) * intensity);
    });
  };

  const handleMouseLeave = () => {
    letters.forEach((letter) => {
      animateLetter(letter, 0.3);
    });
  };

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};

export const Welcome = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const subtitleCleanup = setupTextHover(subtitleRef.current, "subtitle");
    const titleCleanup = setupTextHover(titleRef.current, "title");

    return () => {
      subtitleCleanup();
      titleCleanup();
    };
  }, [subtitleRef, titleRef]);

  return (
    <section id="welcome">
      <p ref={subtitleRef}>
        {renderText("Hey, I'm Bohdan! Welcome to my", "text-3xl font-georama")}
      </p>
      <h1 ref={titleRef} className="mt-7">
        {renderText("portfolio", "text-9xl italic font-georama")}
      </h1>

      <div className="small-screen">
        <p>
          This portfolio is designed to work on desktop/tablet screens only.
        </p>
      </div>
    </section>
  );
};
