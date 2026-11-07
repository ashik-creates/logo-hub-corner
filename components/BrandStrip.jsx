import { SiFigma, SiGoogle, SiSpotify, SiYoutube } from "react-icons/si";
import { BiLogoAdobe } from "react-icons/bi";
import { brands } from "@/lib/data";

const icons = {
  google: SiGoogle,
  youtube: SiYoutube,
  spotify: SiSpotify,
  adobe: BiLogoAdobe,
  figma: SiFigma,
};

export default function BrandStrip() {
  return (
    <section
      aria-label="Brands featured in this portfolio"
      className="border-y border-cream/10 bg-[#010902]"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <ul className="flex flex-wrap items-center justify-center gap-x-9 gap-y-5 py-7 md:flex-nowrap md:gap-0 md:py-0">
          {brands.map((brand, index) => {
            const Icon = icons[brand.icon];
            return (
              <li
                key={brand.name}
                className={`group flex items-center justify-center gap-3 md:h-[76px] md:flex-1 ${
                  index > 0 ? "md:border-l md:border-cream/10" : ""
                }`}
              >
                <Icon
                  className="size-[19px] text-cream/60 transition-colors duration-300 group-hover:text-cream"
                  aria-hidden="true"
                />
                <span className="text-[11px] uppercase tracking-[0.22em] text-cream/45 transition-colors duration-300 group-hover:text-cream/80">
                  {brand.name}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
