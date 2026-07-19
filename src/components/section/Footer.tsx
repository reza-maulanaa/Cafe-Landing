const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=-6.200000,106.816666";
const WHATSAPP_URL =
  "https://wa.me/6281234567890?text=Halo%20Kopi%20Dari%20Hati%2C%20saya%20ingin%20bertanya%20tentang%20reservasi%20ya";

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/",
    icon: (
      <path
        fill="currentColor"
        d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1C2.6 9.9 2.6 10.3 2.6 12s0 2.1.1 3.3c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-3.3s0-2.1-.1-3.3c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4C15.5 4 15.1 4 12 4Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Zm5.1-3.3a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z"
      />
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/",
    icon: (
      <path
        fill="currentColor"
        d="M16.5 3c.3 2 1.5 3.6 3.5 4v2.4c-1.3 0-2.5-.4-3.5-1v5.6A5.5 5.5 0 1 1 11 8.3v2.5a3 3 0 1 0 2.5 2.96V3h3Z"
      />
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/",
    icon: (
      <path
        fill="currentColor"
        d="M13 3h3V0h-3c-3 0-5 2-5 5v2H5v3h3v9h3V10h3l1-3H11V5c0-.6.4-1 1-1Z"
      />
    ),
  },
];

const Footer = () => {
  return (
    <footer id="kontak" className="bg-espresso text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:gap-8 lg:px-8">
        <div>
          <p className="text-lg font-semibold">Kopi Dari Hati</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">
            Teman baik untuk hari yang tenang. Mampir, pesan, dan nikmati
            suasana.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {s.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cream/60">
            Kunjungi
          </p>
          <ul className="mt-4 space-y-3 text-sm text-cream/80">
            <li>Jl. Kenangan No. 18, Bandung</li>
            <li>Senin – Minggu · 08.00 – 22.00</li>
            <li>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-latte underline-offset-4 hover:underline"
              >
                Buka di Google Maps
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cream/60">
            Kontak Cepat
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-latte px-5 py-3 text-sm font-semibold text-espresso transition-colors hover:bg-caramel"
          >
            Chat via WhatsApp
          </a>
          <p className="mt-4 text-sm text-cream/60">
            Untuk reservasi grup atau pertanyaan menu.
          </p>
        </div>
      </div>

      <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Kopi Dari Hati. Dibuat dengan hati.
      </div>
    </footer>
  );
};

export default Footer;
