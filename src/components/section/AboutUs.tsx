import Image from "next/image";

const AboutUs = () => {
  return (
    <section
      id="tentang"
      className="border-b border-espresso/10 bg-cream py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="order-2 lg:order-1">
          <span className="text-xs font-medium uppercase tracking-widest text-mocha">
            Filosofi Kami
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-espresso sm:text-4xl">
            Dari biji yang sabar, jadi cangkir yang hangat.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-espresso/70 sm:text-lg">
            Kopi Dari Hati lahir dari kepercayaan bahwa secangkir kopi bukan
            sekadar minuman, melainkan ruang untuk melambat. Kami memanggang
            biji Arabika pilihan dalam jumlah kecil agar setiap racikan selalu
            segar dan jujur rasanya.
          </p>
          <p className="mt-4 text-base leading-relaxed text-espresso/70 sm:text-lg">
            Di sini kamu boleh datang sendirian untuk bekerja, atau bersama
            kawan untuk sekadar mengobrol. Ruang kami dibuat senyaman rumah —
            dengan Wi-Fi yang stabil, colokan yang cukup, dan senyum yang gratis.
          </p>
        </div>

        <div className="order-1 overflow-hidden rounded-3xl border border-espresso/10 shadow-sm lg:order-2">
          <Image
            src="/images/about.svg"
            alt="Suasana interior hangat kedai Kopi Dari Hati"
            width={800}
            height={600}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
