"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";

const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=-6.200000,106.816666";

const Hero = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-hero-item]", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.15,
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="beranda"
      className="relative flex min-h-[92svh] items-start overflow-hidden pt-10 sm:items-center sm:min-h-[92vh] sm:pt-0"
    >
      <Image
        src="/images/hero.svg"
        alt="Suasana hangat interior kedai Cafe Jatibarang"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="-z-10 absolute inset-0 bg-gradient-to-r from-espresso/85 via-espresso/55 to-espresso/20" />
      <div className="-z-10 absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-espresso/30" />

      <div
        ref={contentRef}
        className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-4 py-8 sm:gap-7 sm:px-6 sm:py-20 lg:px-8 lg:py-0"
      >
        <h1
          data-hero-item
          className="max-w-3xl text-balance text-5xl font-bold leading-[1.1] tracking-tight text-cream drop-shadow-sm sm:text-5xl lg:text-6xl"
        >
          Cafe Jatibarang, diseduh pelan untuk hari yang tenang.
        </h1>

        <p
          data-hero-item
          className="max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg"
        >
          Nikmati racikan kopi pilihan yang dipanggang kecil-kecilan dan
          disajikan dengan senyum. Tempatmu berhenti sejenak, sebelum dunia
          kembali menarikmu.
        </p>

        <div data-hero-item className="flex flex-wrap items-center gap-4">
          <Link
            href="#menu"
            className="rounded-full bg-latte px-6 py-3 text-sm font-semibold text-espresso transition-colors hover:bg-caramel"
          >
            Lihat Menu
          </Link>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cream/40 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
          >
            Rute Lokasi
          </a>
        </div>

        <dl
          data-hero-item
          className="mt-4 grid w-full grid-cols-3 gap-3 border-t border-cream/20 pt-6 sm:mt-6 sm:max-w-lg sm:gap-8 sm:pt-8"
        >
          {[
            { value: "2018", label: "Sejak berdiri" },
            { value: "100%", label: "Arabika pilihan" },
            { value: "12+", label: "Racikan menu" },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="text-2xl font-bold text-cream sm:text-3xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-xs leading-snug text-cream/70 sm:text-sm">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Hero;
