"use client";

import {
  useEffect,
  useRef,
  type ElementType,
  type ReactNode,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionRevealProps {
  id?: string;
  className?: string;
  children: ReactNode;
  /** tag yang dirender, default section */
  as?: ElementType;
  /** jarak vertikal awal (px) sebelum elemen muncul */
  y?: number;
  /** jeda antar-elemen bertagar data-reveal (detik) */
  stagger?: number;
  /** trigger mulai: saat bagian mencapai persen viewport tertentu */
  start?: string;
}

/**
 * Pembungkus section yang memunculkan anak ber-`data-reveal` secara halus
 * saat di-scroll. Ringan karena hanya memakai transform/opacity (GPU) dan
 * dijalankan sekali (once: true).
 */
export default function SectionReveal({
  id,
  className,
  children,
  as,
  y = 28,
  stagger = 0.08,
  start = "top 82%",
}: SectionRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const found = el.querySelectorAll<HTMLElement>("[data-reveal]");
      const targets = found.length ? Array.from(found) : [el];

      gsap.set(targets, { willChange: "transform, opacity" });
      gsap.from(targets, {
        y,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger,
        scrollTrigger: {
          trigger: el,
          start,
          once: true,
        },
        onComplete: () => gsap.set(targets, { clearProps: "willChange" }),
      });
    }, el);

    return () => ctx.revert();
  }, [y, stagger, start]);

  const Tag = (as ?? "section") as ElementType;

  return (
    <Tag id={id} className={className} ref={ref}>
      {children}
    </Tag>
  );
}
