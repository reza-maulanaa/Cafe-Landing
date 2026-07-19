import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden border-b border-amber-900/10"
    >
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-amber-700/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-amber-900/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <span className="rounded-full border border-amber-900/20 bg-amber-900/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-amber-900">
          Teman Baik
        </span>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-amber-950 sm:text-5xl lg:text-6xl">
          Kopi Dari Hati, diseduh pelan untuk hari yang tenang.
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg">
          Nikmati racikan kopi pilihan yang dipanggang kecil-kecilan dan
          disajikan dengan senyum. Tempatmu berhenti sejenak, sebelum dunia
          kembali menarikmu.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="#kontak"
            className="rounded-full bg-amber-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-800"
          >
            Pesan Sekarang
          </Link>
          <Link
            href="#menu"
            className="rounded-full border border-amber-900/30 px-6 py-3 text-sm font-semibold text-amber-900 transition-colors hover:bg-amber-900/5"
          >
            Lihat Menu
          </Link>
        </div>

        <dl className="mt-6 grid grid-cols-3 gap-8 border-t border-amber-900/10 pt-8">
          {[
            { value: "2018", label: "Sejak berdiri" },
            { value: "100%", label: "Arabika pilihan" },
            { value: "12+", label: "Racikan menu" },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="text-2xl font-bold text-amber-950 sm:text-3xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-xs text-foreground/60 sm:text-sm">
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
