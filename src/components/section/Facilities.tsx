import type { ReactNode } from "react";

interface Facility {
  label: string;
  icon: ReactNode;
}

const facilities: Facility[] = [
  {
    label: "Wi-Fi Cepat",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12.5a10 10 0 0 1 14 0M8 15.5a5 5 0 0 1 8 0M12 18.5h.01"
      />
    ),
  },
  {
    label: "Area Outdoor",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 20h18M12 4v8m0 0-4 4m4-4 4 4M5 12l7-7 7 7"
      />
    ),
  },
  {
    label: "Colokan Listrik",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 3v5m6-5v5M7 8h10v3a5 5 0 0 1-10 0V8ZM12 16v5"
      />
    ),
  },
  {
    label: "Area Merokok",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 16h9a3 3 0 1 0-3-3M17 13a2 2 0 1 1 3 1.5M4 20h16"
      />
    ),
  },
  {
    label: "Parkir Luas",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l1.5-5h11L19 13M6 13h12v5H6zM9 18v2m6-2v2"
      />
    ),
  },
  {
    label: "AC Nyaman",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8h18v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8Zm4 0v2m4-2v2m4-2v2"
      />
    ),
  },
];

const hours: { day: string; time: string }[] = [
  { day: "Senin – Kamis", time: "08.00 – 22.00" },
  { day: "Jumat", time: "08.00 – 23.00" },
  { day: "Sabtu", time: "09.00 – 23.00" },
  { day: "Minggu", time: "09.00 – 22.00" },
];

const Facilities = () => {
  return (
    <section
      id="fasilitas"
      className="border-b border-espresso/10 bg-cream py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <span className="text-xs font-medium uppercase tracking-widest text-mocha">
            Jam Operasional
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-espresso sm:text-4xl">
            Kapan kami buka?
          </h2>
          <dl className="mt-6 divide-y divide-espresso/10 rounded-2xl border border-espresso/10 bg-sand/40 px-5">
            {hours.map((row) => (
              <div
                key={row.day}
                className="flex items-center justify-between py-4"
              >
                <dt className="text-base font-medium text-espresso">
                  {row.day}
                </dt>
                <dd className="text-base text-mocha">{row.time}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <span className="text-xs font-medium uppercase tracking-widest text-mocha">
            Fasilitas
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-espresso sm:text-4xl">
            Nyaman untuk nongkrong
          </h2>
          <ul className="mt-6 grid grid-cols-2 gap-4">
            {facilities.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-3 rounded-2xl border border-espresso/10 bg-cream p-4"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mocha/15 text-coffee">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </svg>
                </span>
                <span className="text-sm font-medium text-espresso">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
