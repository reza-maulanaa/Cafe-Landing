"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#tentang", label: "Tentang" },
  { href: "#menu", label: "Menu" },
  { href: "#fasilitas", label: "Fasilitas" },
  { href: "#kontak", label: "Kontak" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-espresso/10 bg-cream/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="#beranda"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-espresso"
        >
          <Image
            src="/favicon.ico"
            alt=""
            width={28}
            height={28}
            unoptimized
            className="h-7 w-7 rounded-full"
            aria-hidden="true"
          />
          Cafe Jatibarang
        </Link>

        <ul className="hidden items-center gap-8 text-sm font-medium text-mocha md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-espresso"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#kontak"
          className="hidden rounded-full bg-coffee px-4 py-2 text-sm font-semibold text-cream transition-colors hover:bg-espresso md:inline-block"
        >
          Pesan Sekarang
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-espresso transition-colors hover:bg-espresso/5 md:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-espresso/10 bg-cream md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-mocha transition-colors hover:bg-espresso/5 hover:text-espresso"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#kontak"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-coffee px-4 py-3 text-center text-base font-semibold text-cream transition-colors hover:bg-espresso"
              >
                Pesan Sekarang
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
