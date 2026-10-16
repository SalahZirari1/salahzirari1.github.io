import { useEffect, useRef } from 'react';

/** A 50 Hz sine trace drawn in the page's accent color. Static when reduced motion is on. */
export function Wave() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const root = document.documentElement;
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dark = window.matchMedia('(prefers-color-scheme: dark)');
    const t0 = performance.now();
    let frame = 0;

    const size = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (now: number) => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const mid = h / 2;
      const cs = getComputedStyle(root);
      ctx.clearRect(0, 0, w, h);

      ctx.strokeStyle = cs.getPropertyValue('--rule').trim();
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, mid);
      ctx.lineTo(w, mid);
      ctx.stroke();

      ctx.strokeStyle = cs.getPropertyValue('--accent').trim();
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      const phase = still ? 0 : (now - t0) / 900;
      const cycles = Math.max(4, Math.round(w / 90));
      for (let x = 0; x <= w; x += 2) {
        const y = mid - Math.sin((x / w) * cycles * 2 * Math.PI - phase) * (h * 0.36);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      if (!still) frame = requestAnimationFrame(draw);
    };

    const redraw = () => {
      size();
      if (still) draw(0);
    };

    size();
    if (still) draw(0);
    else frame = requestAnimationFrame(draw);
    window.addEventListener('resize', redraw);
    dark.addEventListener('change', redraw);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', redraw);
      dark.removeEventListener('change', redraw);
    };
  }, []);

  return <canvas ref={ref} />;
}
