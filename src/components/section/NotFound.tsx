import Link from "next/link";

const NotFound = () => {
  return (
    <section
      id="not-found"
      className="relative flex min-h-[92svh] flex-col items-center justify-center overflow-hidden px-4 py-20 text-center sm:min-h-[92vh]"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-espresso to-coffee" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(200,162,124,0.15),transparent_60%)]" />

      <p className="font-mono text-sm uppercase tracking-[0.3em] text-latte">
        Cafe Jatibarang
      </p>

      <h1 className="mt-4 text-balance text-7xl font-bold leading-none text-cream drop-shadow-sm sm:text-8xl">
        404
      </h1>

      <p className="mt-6 max-w-md text-base leading-relaxed text-cream/80 sm:text-lg">
        Halaman yang kamu cari sepertinya sudah habis diseduh. Tenang, kopi
        lainnya masih menunggu di kedai kami.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-latte px-6 py-3 text-sm font-semibold text-espresso transition-colors hover:bg-caramel"
        >
          Kembali ke Beranda
        </Link>
        <Link
          href="#menu"
          className="rounded-full border border-cream/40 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
        >
          Lihat Menu
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
