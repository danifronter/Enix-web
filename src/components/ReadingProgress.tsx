import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const clamp = (value: number) => Math.min(1, Math.max(0, value));

    const getReadingTarget = () =>
      document.querySelector<HTMLElement>("[data-reading-content]") ||
      document.querySelector<HTMLElement>(".article-content") ||
      document.querySelector<HTMLElement>(".prose") ||
      document.querySelector<HTMLElement>("main article");

    const update = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const article = getReadingTarget();

        if (!article) {
          const doc = document.documentElement;
          const max = doc.scrollHeight - window.innerHeight;
          setProgress(max > 0 ? clamp(window.scrollY / max) : 0);
          return;
        }

        const start = article.offsetTop;
        const end = article.offsetTop + article.offsetHeight - window.innerHeight;
        const distance = end - start;

        if (distance <= 0) {
          setProgress(1);
          return;
        }

        setProgress(clamp((window.scrollY - start) / distance));
      });
    };

    update();

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[120] h-1 bg-transparent" aria-hidden="true">
      <div
        className="h-full origin-left bg-gradient-to-r from-enix-red to-enix-glow transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
