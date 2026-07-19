import Link from "next/link";

const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=-6.200000,106.816666";

const Hero = () => {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden border-b border-espresso/10 bg-gradient-to-b from-sand/60 to-cream"
    >
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-mocha/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-coffee/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <span className="rounded-full border border-mocha/30 bg-mocha/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-mocha">
          Teman Baik
        </span>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-espresso sm:text-5xl lg:text-6xl">
          Kopi Dari Hati, diseduh pelan untuk hari yang tenang.
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-espresso/70 sm:text-lg">
          Nikmati racikan kopi pilihan yang dipanggang kecil-kecilan dan
          disajikan dengan senyum. Tempatmu berhenti sejenak, sebelum dunia
          kembali menarikmu.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="#menu"
            className="rounded-full bg-coffee px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-espresso"
          >
            Lihat Menu
          </Link>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-mocha/40 px-6 py-3 text-sm font-semibold text-coffee transition-colors hover:bg-mocha/10"
          >
            Rute Lokasi
          </a>
        </div>

        <dl className="mt-6 grid grid-cols-3 gap-8 border-t border-espresso/10 pt-8">
          {[
            { value: "2018", label: "Sejak berdiri" },
            { value: "100%", label: "Arabika pilihan" },
            { value: "12+", label: "Racikan menu" },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="text-2xl font-bold text-coffee sm:text-3xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-xs text-espresso/60 sm:text-sm">
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
