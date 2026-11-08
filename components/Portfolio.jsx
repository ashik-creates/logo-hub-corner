"use client";

import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { LuArrowRight, LuArrowUpRight } from "react-icons/lu";
import SectionLabel from "@/components/ui/SectionLabel";
import ArrowButton from "@/components/ui/ArrowButton";
import SkeletonImage from "@/components/ui/SkeletonImage";
import { contactEmail, projects } from "@/lib/data";

const gridVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.04 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Portfolio() {
  const handleViewAll = () => {
    toast(
      `The full project archive is available on request — ${contactEmail}`,
      { duration: 5000 },
    );
  };

  return (
    <section
      id="portfolio"
      className="relative scroll-mt-24 py-20 sm:py-24 lg:py-32"
      aria-labelledby="portfolio-heading"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_2.18fr] lg:gap-10 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <SectionLabel>My Portfolio</SectionLabel>
            <h2
              id="portfolio-heading"
              className="mt-5 font-serif text-[clamp(2.7rem,4.4vw,4.3rem)] leading-[1.02] tracking-[-0.025em] text-cream"
            >
              Selected
              <span className="block">Works</span>
            </h2>
            <p className="mt-6 max-w-[22rem] text-[14px] leading-[1.85] text-cream/55">
              A collection of logos and brand identities I&apos;ve designed
              with passion.
            </p>
            <ArrowButton
              variant="outline"
              icon={<LuArrowRight className="size-4" />}
              onClick={handleViewAll}
              className="mt-8"
            >
              View All Projects
            </ArrowButton>
          </motion.div>

          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 sm:gap-5 xl:grid-cols-3"
          >
            {projects.map((project, index) => (
              <motion.a
                key={project.name}
                href={project.image}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} project`}
                variants={cardVariants}
                className="group relative aspect-square overflow-hidden rounded-2xl border border-cream/10 bg-ink-soft outline-none transition-all duration-500 hover:-translate-y-1 hover:border-gold/35 hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.85)] focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                <SkeletonImage
                  src={project.image}
                  alt={`${project.name} logo and brand identity design`}
                  fill
                  sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.045]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95"
                />

                <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4 sm:p-5">
                  <span className="rounded-full border border-cream/15 bg-ink/70 px-2.5 py-1 text-[9px] uppercase tracking-[0.22em] text-cream/70 backdrop-blur-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full border border-cream/15 bg-ink/70 px-2.5 py-1 text-[8.5px] uppercase tracking-[0.18em] text-cream/70 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                  <div>
                    <h3 className="font-serif text-[21px] leading-tight tracking-[-0.01em] text-cream sm:text-[23px]">
                      {project.name}
                    </h3>
                    <span className="mt-2 block text-[9px] uppercase tracking-[0.22em] text-cream/55">
                      Logo &amp; Identity
                    </span>
                  </div>
                  <LuArrowUpRight
                    className="size-4 shrink-0 text-cream/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cream"
                    aria-hidden="true"
                  />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
