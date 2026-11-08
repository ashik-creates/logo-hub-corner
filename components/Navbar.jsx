"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";
import BrandLogo from "@/components/ui/BrandLogo";
import ArrowButton from "@/components/ui/ArrowButton";
import { contactEmail, navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const pendingSection = useRef(null);
  const reduceMotion = useReducedMotion();

  const navigateToSection = (event, id) => {
    event.preventDefault();
    pendingSection.current = id;
    setOpen(false);
  };

  useEffect(() => {
    let frame = 0;

    const syncHash = (id) => {
      const nextHash = id === "home" ? "" : `#${id}`;
      if (nextHash === window.location.hash) return;

      window.history.replaceState(
        window.history.state,
        "",
        `${window.location.pathname}${window.location.search}${nextHash}`,
      );
    };

    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 24);

      if (y + window.innerHeight >= document.documentElement.scrollHeight - 8) {
        setActive("contact");
        syncHash("contact");
        return;
      }

      const marker = y + window.innerHeight * 0.34;
      let current = "home";

      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (!section) continue;
        const top = section.getBoundingClientRect().top + y;
        if (top <= marker) current = link.id;
      }

      setActive(current);
      syncHash(current);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled || open
          ? "border-b border-cream/10 bg-ink/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[74px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:h-[84px] lg:px-12">
        <a
          href="#home"
          className="group flex items-center gap-3 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
          aria-label="Logo Hub Corner — back to top"
          onClick={() => setOpen(false)}
        >
          <BrandLogo className="h-9 w-[76px] transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-[1.03] sm:h-10 sm:w-[84px]" />
          <span className="font-serif text-[17px] leading-none tracking-[-0.01em] text-cream sm:text-[19px]">
            Logo Hub Corner
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex xl:gap-10">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative py-2 text-[12.5px] tracking-[0.04em] outline-none transition-colors duration-300 hover:text-cream focus-visible:text-cream ${
                  isActive ? "text-cream" : "text-cream/55"
                }`}
              >
                {link.label}
                {isActive ? (
                  <motion.span
                    layoutId="navbar-active-dot"
                    className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                ) : null}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <ArrowButton
              href="#contact"
              size="sm"
              icon={<LuArrowRight className="size-3.5" />}
            >
              Let&apos;s Talk
            </ArrowButton>
          </div>

          <button
            type="button"
            className="relative flex size-10 items-center justify-center rounded-full border border-cream/20 text-cream outline-none transition-colors duration-300 hover:border-cream/45 hover:bg-cream/[0.05] focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-4 focus-visible:ring-offset-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative block h-3 w-[18px]">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-current transition-all duration-300 ${
                  open ? "top-1/2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-full bg-current transition-all duration-300 ${
                  open ? "bottom-1/2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence
        initial={false}
        onExitComplete={() => {
          const id = pendingSection.current;
          if (!id) return;
          pendingSection.current = null;
          document.getElementById(id)?.scrollIntoView({
            behavior: reduceMotion ? "auto" : "smooth",
            block: "start",
          });
        }}
      >
        {open ? (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-cream/10 bg-ink/98 backdrop-blur-xl lg:hidden"
          >
            <nav
              aria-label="Mobile"
              className="mx-auto max-w-[1440px] px-5 py-7 sm:px-8"
            >
              <ul className="flex flex-col">
                {navLinks.map((link, index) => {
                  const isActive = active === link.id;
                  return (
                    <li key={link.id} className="border-b border-cream/10 last:border-b-0">
                      <a
                        href={link.href}
                        aria-current={isActive ? "page" : undefined}
                        onClick={(event) => navigateToSection(event, link.id)}
                        className="group flex items-center justify-between py-4 outline-none"
                      >
                        <span className="flex items-baseline gap-4">
                          <span className="text-[9px] tracking-[0.22em] text-gold/70">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span
                            className={`font-serif text-2xl transition-colors duration-300 sm:text-[28px] ${
                              isActive
                                ? "text-cream"
                                : "text-cream/60 group-hover:text-cream"
                            }`}
                          >
                            {link.label}
                          </span>
                        </span>
                        <LuArrowRight className="size-4 -rotate-45 text-cream/35 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-cream" />
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-[11px] uppercase tracking-[0.18em] text-cream/55 transition-colors hover:text-cream"
                >
                  {contactEmail}
                </a>
                <ArrowButton
                  href="#contact"
                  icon={<LuArrowRight className="size-4" />}
                  onClick={(event) => navigateToSection(event, "contact")}
                  className="w-full sm:w-auto"
                >
                  Let&apos;s Talk
                </ArrowButton>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
