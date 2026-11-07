"use client";

import { motion } from "framer-motion";
import { LuCompass, LuFingerprint, LuPenTool, LuShapes } from "react-icons/lu";
import SectionLabel from "@/components/ui/SectionLabel";
import { services } from "@/lib/data";

const icons = {
  pen: LuPenTool,
  identity: LuFingerprint,
  visual: LuShapes,
  strategy: LuCompass,
};

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-y border-cream/10 bg-[#010901] py-16 sm:py-20"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_2.2fr] lg:items-start lg:gap-12 xl:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:pt-1"
          >
            <SectionLabel>My Services</SectionLabel>
            <h2
              id="services-heading"
              className="mt-5 font-serif text-[clamp(2.7rem,4.4vw,4.1rem)] leading-[1.02] tracking-[-0.025em] text-cream"
            >
              What I Do
            </h2>
            <p className="mt-5 max-w-[22rem] text-[14px] leading-[1.85] text-cream/55">
              From concept to completion, I help brands stand out.
            </p>
          </motion.div>

          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
          >
            {services.map((service, index) => {
              const Icon = icons[service.icon];
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  className={`group flex flex-col gap-5 py-7 sm:px-4 sm:py-4 xl:px-7 xl:py-2 ${
                    index > 0
                      ? "border-t border-cream/10 xl:border-l xl:border-t-0"
                      : "sm:pl-0 xl:pl-0"
                  } ${index === services.length - 1 ? "xl:pr-0" : ""}`}
                >
                  <div className="flex size-14 items-center justify-center rounded-full border border-cream/15 bg-cream/[0.025] text-cream transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:border-cream group-hover:bg-cream group-hover:text-ink">
                    <Icon className="size-[23px]" strokeWidth={1.4} aria-hidden="true" />
                  </div>
                  <div>
                    <span className="mb-2 block text-[9px] uppercase tracking-[0.24em] text-cream/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="max-w-[165px] text-[15px] font-medium leading-[1.5] tracking-[-0.005em] text-cream/90">
                      {service.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
