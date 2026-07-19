import Link from "next/link";
import Image from "next/image";

const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=-6.200000,106.816666";

const Hero = () => {
  return (
    <section
      id="beranda"
      className="relative flex min-h-[88vh] items-center overflow-hidden"
    >
      <Image
        src="/images/hero.svg"
        alt="Suasana hangat interior kedai Kopi Dari Hati"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="-z-10 absolute inset-0 bg-gradient-to-r from-espresso/85 via-espresso/55 to-espresso/20" />
      <div className="-z-10 absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-espresso/30" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-7 px-4 py-24 sm:px-6 lg:px-8 lg:py-0">
        <span className="rounded-full border border-cream/30 bg-cream/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-cream/90 backdrop-blur">
          Teman Baik
        </span>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-cream drop-shadow-sm sm:text-5xl lg:text-6xl">
          Kopi Dari Hati, diseduh pelan untuk hari yang tenang.
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
          Nikmati racikan kopi pilihan yang dipanggang kecil-kecilan dan
          disajikan dengan senyum. Tempatmu berhenti sejenak, sebelum dunia
          kembali menarikmu.
        </p>

        <div className="flex flex-wrap items-center gap-4">
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

        <dl className="mt-6 grid grid-cols-3 gap-8 border-t border-cream/20 pt-8">
          {[
            { value: "2018", label: "Sejak berdiri" },
            { value: "100%", label: "Arabika pilihan" },
            { value: "12+", label: "Racikan menu" },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="text-2xl font-bold text-cream sm:text-3xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-xs text-cream/70 sm:text-sm">
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
