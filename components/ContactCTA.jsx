"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  LuArrowRight,
  LuArrowUpRight,
  LuMail,
  LuMessageCircle,
  LuPhone,
} from "react-icons/lu";
import SectionLabel from "@/components/ui/SectionLabel";
import ArrowButton from "@/components/ui/ArrowButton";
import {
  contactEmail,
  contactPhone,
  contactPhoneDisplay,
  whatsappDisplay,
  whatsappNumber,
} from "@/lib/data";

const projectTypes = [
  "Logo Design",
  "Brand Identity",
  "Visual Design",
  "Brand Strategy",
  "Something Else",
];

const inputClasses =
  "mt-2 w-full rounded-xl border border-cream/15 bg-ink/60 px-4 py-3 text-[13px] text-cream placeholder-cream/30 outline-none transition-colors duration-300 focus:border-gold/50 focus:ring-2 focus:ring-gold/20";

const contactItems = [
  {
    label: "Email",
    value: contactEmail,
    href: `mailto:${contactEmail}`,
    icon: LuMail,
    external: false,
  },
  {
    label: "Phone",
    value: contactPhoneDisplay,
    href: `tel:${contactPhone}`,
    icon: LuPhone,
    external: false,
  },
  {
    label: "WhatsApp",
    value: whatsappDisplay,
    href: `https://wa.me/${whatsappNumber}`,
    icon: LuMessageCircle,
    external: true,
  },
];

export default function ContactCTA() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: projectTypes[0],
    message: "",
  });

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const lines = [
      "Hi Logo Hub Corner! I'd like to start a project.",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
    ];

    if (form.phone.trim()) {
      lines.push(`Phone: ${form.phone}`);
    }

    lines.push(`Service: ${form.service}`, "", "Project details:", form.message);

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp with your message ready to send.");
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-20 sm:py-24 lg:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[42rem]"
        >
          <SectionLabel>Let&apos;s Work Together</SectionLabel>
          <h2
            id="contact-heading"
            className="mt-5 font-serif text-[clamp(2.7rem,5vw,4.3rem)] leading-[1.02] tracking-[-0.03em] text-cream"
          >
            Have a project
            <span className="block">in mind?</span>
          </h2>
          <p className="mt-5 max-w-[30rem] text-[14px] leading-[1.9] text-cream/55">
            Tell me a little about it, or reach out directly. Let&apos;s create
            something memorable.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.02 }}
            className="flex flex-col gap-3"
          >
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center gap-4 rounded-2xl border border-cream/10 bg-ink-soft p-5 outline-none transition-all duration-300 hover:border-cream/25 hover:bg-ink-raised focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-cream/10 bg-cream/[0.03] text-gold">
                    <Icon className="size-[17px]" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[9px] uppercase tracking-[0.22em] text-cream/40">
                      {item.label}
                    </span>
                    <span className="mt-1 block truncate font-serif text-lg tracking-[-0.01em] text-cream">
                      {item.value}
                    </span>
                  </span>
                  <LuArrowUpRight
                    className="size-4 shrink-0 text-cream/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cream"
                    aria-hidden="true"
                  />
                </a>
              );
            })}

            <div className="mt-2 rounded-2xl border border-cream/10 bg-gradient-to-br from-ink-soft to-ink-raised p-5">
              <p className="text-[9px] uppercase tracking-[0.22em] text-cream/40">
                Response time
              </p>
              <p className="mt-2 font-serif text-lg italic text-cream/75">
                Usually within 24 hours.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-[1.5rem] border border-cream/10 bg-ink-soft p-6 sm:p-8 lg:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-[9px] uppercase tracking-[0.22em] text-cream/45"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={update}
                    placeholder="Your name"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-[9px] uppercase tracking-[0.22em] text-cream/45"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={update}
                    placeholder="you@example.com"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="text-[9px] uppercase tracking-[0.22em] text-cream/45"
                  >
                    Phone <span className="text-cream/25">(optional)</span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={update}
                    placeholder="+1 555 000 0000"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-service"
                    className="text-[9px] uppercase tracking-[0.22em] text-cream/45"
                  >
                    Service
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={form.service}
                    onChange={update}
                    className={`${inputClasses} appearance-none`}
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-ink text-cream">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-message"
                  className="text-[9px] uppercase tracking-[0.22em] text-cream/45"
                >
                  Project Details
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={update}
                  placeholder="Tell me about your brand and what you need..."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[10px] leading-relaxed text-cream/35">
                  Opens WhatsApp with your message ready to send.
                </p>
                <ArrowButton
                  type="submit"
                  size="lg"
                  icon={<LuArrowRight className="size-4" />}
                  className="w-full sm:w-auto"
                >
                  Send Message
                </ArrowButton>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
