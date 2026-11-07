"use client";

import { Tooltip } from "@heroui/react";
import { FaBehance, FaWhatsapp } from "react-icons/fa6";
import { LuArrowUp } from "react-icons/lu";
import BrandLogo from "@/components/ui/BrandLogo";
import { socials } from "@/lib/data";

const socialIcons = {
  whatsapp: FaWhatsapp,
  behance: FaBehance,
};

export default function Footer() {
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-cream/10">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between sm:py-12">
          <a
            href="#home"
            className="group flex w-fit items-center gap-3 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
            aria-label="Logo Hub Corner — back to top"
          >
            <BrandLogo className="h-10 w-[84px] transition-transform duration-500 group-hover:-rotate-3" />
            <span>
              <span className="block font-serif text-[18px] leading-tight tracking-[-0.01em] text-cream">
                Logo Hub Corner
              </span>
              <span className="mt-1 block text-[8.5px] uppercase tracking-[0.26em] text-cream/40">
                Logo design &amp; brand identity
              </span>
            </span>
          </a>

          <ul className="flex flex-wrap items-center gap-2.5" aria-label="Social links">
            {socials.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <li key={social.label}>
                  <Tooltip>
                    <Tooltip.Trigger
                      render={(triggerProps) => {
                        const { className: _className, ...props } = triggerProps;
                        return (
                          <a
                            {...props}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="flex size-10 items-center justify-center rounded-full border border-cream/15 text-cream/60 transition-all duration-300 hover:border-cream hover:bg-cream hover:text-ink focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
                          >
                            <Icon className="size-[15px]" aria-hidden="true" />
                          </a>
                        );
                      }}
                    >
                      <Icon />
                    </Tooltip.Trigger>
                    <Tooltip.Content className="border border-cream/10 bg-[#06170d] px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-cream/80">
                      {social.label}
                    </Tooltip.Content>
                  </Tooltip>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col gap-4 border-t border-cream/10 py-6 text-[9.5px] uppercase tracking-[0.18em] text-cream/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 Logo Hub Corner. All rights reserved.</p>
          <button
            type="button"
            onClick={backToTop}
            className="group flex w-fit items-center gap-2 outline-none transition-colors duration-300 hover:text-cream focus-visible:text-cream"
          >
            Back to top
            <LuArrowUp className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
