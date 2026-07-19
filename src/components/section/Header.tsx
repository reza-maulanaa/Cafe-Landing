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
    <header className="sticky top-0 z-50 w-full border-b border-amber-900/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="#beranda"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-amber-900"
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
                className="transition-colors hover:text-amber-900"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#kontak"
          className="rounded-full bg-amber-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-amber-800"
        >
          Pesan Sekarang
        </Link>
      </nav>
    </header>
  );
};

export default Header;
