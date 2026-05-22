"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const COUNTRY_CODES = [
  { code: "+94", label: "🇱🇰 +94" },
  { code: "+1", label: "🇺🇸 +1" },
  { code: "+44", label: "🇬🇧 +44" },
  { code: "+91", label: "🇮🇳 +91" },
  { code: "+61", label: "🇦🇺 +61" },
  { code: "+971", label: "🇦🇪 +971" },
  { code: "+974", label: "🇶🇦 +974" },
];

const SERVICES = [
  { value: "ai-solutions", label: "AI Solutions" },
  { value: "digital-solutions", label: "Digital Solutions" },
  { value: "consultation", label: "Consultation" },
  { value: "other", label: "Other" },
];

const INPUT_BASE =
  "bg-transparent border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-white/40 focus:outline-none transition-colors";
const INPUT_CLS = `${INPUT_BASE} w-full`;

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    countryCode: "+94",
    phone: "",
    serviceInterest: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            companyName: "",
            countryCode: "+94",
            phone: "",
            serviceInterest: "",
            message: "",
          });
          setIsSubmitted(false);
        }, 15000);
      } else {
        setError("Something went wrong. Try emailing us directly.");
      }
    } catch {
      setError("Network error. Try emailing us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="max-w-3xl mx-auto">
      <p className="text-[11px] uppercase tracking-[0.3em] text-white/50 mb-4">
        Contact
      </p>
      <h1 className="text-[2.5rem] md:text-[4rem] font-bold leading-[0.92] tracking-[-0.02em] mb-6">
        Tell us what&apos;s
        <br />
        <span className="gradient-text">slowing you down</span>.
      </h1>
      <p className="text-white/60 text-sm md:text-base max-w-xl mb-16">
        Fill in the form and we&apos;ll get back within 24 hours. If we can&apos;t
        help, we&apos;ll tell you.
      </p>

      {isSubmitted ? (
        <div className="border border-white/10 p-10 md:p-14">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">
            Message received
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Thanks — we&apos;re on it.
          </h2>
          <p className="text-sm text-white/60 leading-relaxed max-w-md">
            Our team has your inquiry. We typically reply within 24 hours on
            business days. If it&apos;s urgent, WhatsApp us at +94 77 124 5678.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 block mb-2">
                Full name *
              </span>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className={INPUT_CLS}
              />
            </label>

            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 block mb-2">
                Email *
              </span>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@company.com"
                className={INPUT_CLS}
              />
            </label>
          </div>

          <label className="block">
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 block mb-2">
              Company
            </span>
            <input
              name="companyName"
              type="text"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Optional"
              className={INPUT_CLS}
            />
          </label>

          <label className="block">
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 block mb-2">
              Phone *
            </span>
            <div className="flex gap-3">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className={`${INPUT_BASE} w-32 shrink-0`}
              >
                {COUNTRY_CODES.map(({ code, label }) => (
                  <option key={code} value={code} className="bg-black">
                    {label}
                  </option>
                ))}
              </select>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="77 124 5678"
                className={`${INPUT_CLS} flex-1`}
              />
            </div>
          </label>

          <label className="block">
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 block mb-2">
              What do you need? *
            </span>
            <select
              name="serviceInterest"
              value={formData.serviceInterest}
              onChange={handleChange}
              required
              className={INPUT_CLS}
            >
              <option value="" disabled className="bg-black">
                Pick one
              </option>
              {SERVICES.map(({ value, label }) => (
                <option key={value} value={value} className="bg-black">
                  {label}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 block mb-2">
              Tell us more *
            </span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="What's broken? What takes too long? What should just happen automatically?"
              className={INPUT_CLS}
            />
          </label>

          {error && (
            <p className="text-xs text-red-400 border border-red-500/30 px-4 py-3">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="group flex items-center justify-between w-full bg-white text-black font-semibold px-8 py-5 text-sm hover:bg-white/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span>{isSubmitting ? "Sending…" : "Send message"}</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-2 transition-transform"
            />
          </button>
        </form>
      )}
    </section>
  );
}
