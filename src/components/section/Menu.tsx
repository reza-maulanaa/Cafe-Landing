import { menus, formatPrice } from "@/data/menus";

const Menu = () => {
  return (
    <section
      id="menu"
      className="border-b border-espresso/10 bg-sand/40 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-mocha">
            Menu Andalan
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-espresso sm:text-4xl">
            Yang paling sering dipesan
          </h2>
          <p className="mt-4 text-base leading-relaxed text-espresso/70 sm:text-lg">
            Tiga kategori favorit pelanggan, dari kopi racikan sendiri hingga
            camilan pendamping.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {menus.map((group) => (
            <div
              key={group.category}
              className="flex flex-col rounded-3xl border border-espresso/10 bg-cream p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-coffee">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-col divide-y divide-espresso/10">
                {group.items.map((item) => (
                  <li key={item.name} className="py-4 first:pt-0 last:pb-0">
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="font-medium text-espresso">{item.name}</p>
                      <p className="shrink-0 text-sm font-semibold text-mocha">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-espresso/60">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
