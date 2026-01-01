import { useEffect, useRef } from "react";

type FirefliesProps = {
  enabled: boolean;
  reducedMotion?: boolean;
};

export function Fireflies({ enabled, reducedMotion }: FirefliesProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastRef = useRef<{ x: number; y: number; t: number } | null>(null);

  useEffect(() => {
    if (!enabled || reducedMotion) return;

    const host = hostRef.current;
    if (!host) return;

    const spawn = (x: number, y: number) => {
      const el = document.createElement("span");
      el.className = "firefly";
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;

      // kleine Zufälligkeit
      const size = 4 + Math.random() * 6;
      const dx = (Math.random() - 0.5) * 26;
      const dy = -18 - Math.random() * 28;

      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.setProperty("--dx", `${dx}px`);
      el.style.setProperty("--dy", `${dy}px`);

      host.appendChild(el);

      // nach Animation entfernen
      window.setTimeout(() => el.remove(), 900);
    };

    const onMove = (e: PointerEvent) => {
      const now = performance.now();
      const last = lastRef.current;

      // throttle: nicht bei jeder Bewegung spawnen
      if (last && now - last.t < 20) return;

      lastRef.current = { x: e.clientX, y: e.clientY, t: now };

      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const p = lastRef.current;
        if (!p) return;
        spawn(p.x, p.y);
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [enabled, reducedMotion]);

  return (
    <div
      ref={hostRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 2,
      }}
    />
  );
}
