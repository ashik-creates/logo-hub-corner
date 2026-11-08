"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuArrowDown, LuArrowRight } from "react-icons/lu";
import SectionLabel from "@/components/ui/SectionLabel";
import SkeletonImage from "@/components/ui/SkeletonImage";
import ArrowButton from "@/components/ui/ArrowButton";
import { stats } from "@/lib/data";

const statVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
};

const statItem = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="about"
      className="scroll-mt-24 py-20 sm:py-24 lg:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[0.86fr_1.34fr_0.8fr] lg:gap-12 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="group relative mx-auto w-full max-w-[360px] lg:mx-0"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-cream/10 bg-ink-soft">
              <SkeletonImage
                src="/images/my_pic_2.jpeg"
                alt="Portrait of Asik Hasan"
                fill
                sizes="(min-width: 1024px) 360px, 90vw"
                className="scale-[1.01] object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.045]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[1.5rem] ring-1 ring-inset ring-cream/[0.06]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.02 }}
          >
            <SectionLabel>About Me</SectionLabel>
            <h2
              id="about-heading"
              className="mt-5 font-serif text-[clamp(3rem,5.4vw,4.9rem)] leading-[0.98] tracking-[-0.03em] text-cream"
            >
              Asik Hasan
            </h2>
            <p className="mt-4 font-serif text-[clamp(1.25rem,2vw,1.65rem)] italic text-cream/60">
              Turning ideas into identities.
            </p>
            <p className="mt-6 max-w-[32rem] text-[14px] leading-[1.9] text-cream/55">
              I&apos;m a passionate logo designer who believes in the power of
              simple yet meaningful design. I love creating brands that inspire.
            </p>

            <AnimatePresence initial={false}>
              {expanded ? (
                <motion.p
                  key="about-more"
                  id="about-more"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-[32rem] overflow-hidden text-[14px] leading-[1.9] text-cream/45"
                >
                  <span className="block pt-4">
                    My work sits between strategy and craft. I start with the
                    story a brand needs to tell, then shape a mark and a visual
                    language that carry it with clarity — from the first sketch
                    to the final brand guidelines.
                  </span>
                </motion.p>
              ) : null}
            </AnimatePresence>

            <ArrowButton
              variant="outline"
              icon={
                expanded ? (
                  <LuArrowDown className="size-4 rotate-180" />
                ) : (
                  <LuArrowRight className="size-4" />
                )
              }
              onClick={() => setExpanded((value) => !value)}
              aria-expanded={expanded}
              aria-controls="about-more"
              className="mt-8"
            >
              {expanded ? "Show Less" : "Know More"}
            </ArrowButton>
          </motion.div>

          <motion.dl
            variants={statVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-3 divide-x divide-cream/10 border-t border-cream/10 pt-8 lg:block lg:divide-x-0 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0 xl:pl-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={statItem}
                className={`px-4 first:pl-0 lg:border-b lg:border-cream/10 lg:px-0 lg:py-7 lg:first:pt-0 lg:last:border-b-0 lg:last:pb-0 ${
                  index === 0 ? "pl-0" : ""
                }`}
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-serif text-[clamp(2.4rem,3.4vw,3.25rem)] leading-none tracking-[-0.03em] text-cream">
                    {stat.value}
                  </span>
                  <span className="mt-3 block text-[9px] uppercase tracking-[0.22em] text-cream/45">
                    {stat.label}
                  </span>
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
