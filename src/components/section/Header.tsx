import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#menu", label: "Menu" },
  { href: "#tentang", label: "Tentang" },
  { href: "#kontak", label: "Kontak" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur bg-gray-950">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="#beranda"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-gray-950"
        >
          <Image
            src="/favicon.ico"
            alt="Kopi Dari Hati"
            width={28}
            height={28}
            unoptimized
            className="h-7 w-7"
            aria-hidden="true"
          />
          Kopi Dari Hati
        </Link>

        <ul className="hidden items-center gap-8 text-sm font-medium text-foreground/80 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-gray-950"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#kontak"
          className="rounded-full px-4 py-2 text-sm font-semibold bg-gray-50 text-shadow-gray-50 transition-colors text-gray-950"
        >
          Pesan Sekarang
        </Link>
      </nav>
    </header>
  );
};

export default Header;
