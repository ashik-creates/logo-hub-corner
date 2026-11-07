"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { LuArrowDown, LuArrowRight } from "react-icons/lu";
import HeroWorkspace from "@/components/art/HeroWorkspace";
import ArrowButton from "@/components/ui/ArrowButton";
import { whatsappNumber } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.02 },
  },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-24 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-8 h-[560px] w-[560px] rounded-full bg-gold/[0.045] blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent"
      />

      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-10 px-5 pb-14 pt-10 sm:px-8 sm:pt-14 lg:min-h-[calc(100svh-84px)] lg:grid-cols-[1.02fr_0.98fr] lg:gap-2 lg:px-12 lg:pb-10 lg:pt-4">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-[680px] lg:pb-10"
        >
          <motion.h1
            variants={item}
            id="hero-heading"
            className="font-serif text-[clamp(3.6rem,7.4vw,6.7rem)] font-medium leading-[0.92] tracking-[-0.035em] text-cream"
          >
            Building your
            <span className="block">brand?</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 font-serif text-[clamp(1.9rem,3.5vw,3.1rem)] italic leading-[1.12] tracking-[-0.02em] text-cream/90 sm:mt-6"
          >
            let&apos;s work{" "}
            <span className="inline-block bg-cream px-2.5 pb-1 pt-0.5 not-italic text-ink">
              together
            </span>
          </motion.p>

          <motion.p
            variants={item}
            className="mt-7 max-w-[27rem] text-[14.5px] leading-[1.85] text-cream/60 sm:mt-9 sm:text-[15px]"
          >
            I&apos;m a logo designer who turns ideas into powerful brand
            identities.
          </motion.p>

          <motion.div variants={item} className="mt-8 sm:mt-10">
            <div className="flex flex-wrap items-center gap-3">
              <ArrowButton
                href="#portfolio"
                size="lg"
                icon={<LuArrowRight className="size-4" />}
              >
                View My Work
              </ArrowButton>
              <ArrowButton
                href="#about"
                size="lg"
                variant="outline"
                icon={<LuArrowDown className="size-4" />}
              >
                Learn More
              </ArrowButton>
            </div>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp"
              className="mt-6 flex size-14 items-center justify-center rounded-full border border-cream/25 text-cream/75 outline-none transition-all duration-300 hover:border-cream/60 hover:bg-cream/[0.06] hover:text-cream focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              <FaWhatsapp className="size-6" aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.965, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[680px] lg:mx-0 lg:ml-auto"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cream/[0.05]"
          />
          <HeroWorkspace className="relative z-10 h-auto w-full drop-shadow-[0_30px_80px_rgba(0,0,0,0.45)]" />
        </motion.div>
      </div>
    </section>
  );
}
