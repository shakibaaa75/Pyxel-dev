import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { services } from "../../data/Servicesdata";
import type { Service } from "../../data/Servicesdata";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const smoothEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

// ─── Sidebar ──────────────────────────────────────────────────────────────────
function ServicesSidebar({
  services,
  activeSlug,
  onSelect,
}: {
  services: Service[];
  activeSlug: string;
  onSelect: (slug: string) => void;
}) {
  return (
    <div className="flex flex-col gap-4 sticky top-8">
      {/* Category List */}
      <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden">
        <div className="bg-[#2979FF] px-5 py-4">
          <span className="text-white font-bold text-[15px] font-['Montserrat']">
            Services Category
          </span>
        </div>
        <div className="divide-y divide-[#252525]">
          {services.map((s) => (
            <button
              key={s.id}
              onClick={() => onSelect(s.slug)}
              className={`w-full flex items-center justify-between px-5 py-3.5 text-left transition-colors duration-200 group ${
                activeSlug === s.slug
                  ? "bg-[#1f1f1f] text-[#2979FF]"
                  : "text-gray-300 hover:bg-[#1f1f1f] hover:text-white"
              }`}
            >
              <span className="text-sm font-medium font-['Montserrat']">
                {s.title}
              </span>
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                  activeSlug === s.slug
                    ? "bg-[#2979FF]"
                    : "bg-[#252525] group-hover:bg-[#2979FF]"
                }`}
              >
                <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 13L13 3M13 3H6M13 3V10"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Contact Card */}
      <div className="bg-[#1a1a1a] rounded-2xl p-5 flex flex-col items-center text-center gap-3">
        <div className="w-14 h-14 rounded-full bg-[#252525] flex items-center justify-center">
          <span className="text-2xl">✉️</span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed font-['Montserrat']">
          We always available to discuss with you
        </p>
        <p className="text-white font-semibold text-sm font-['Montserrat']">
          info@domain.com
        </p>
        <button className="w-full bg-[#2979FF] hover:bg-[#1565C0] text-white text-sm font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 font-['Montserrat']">
          Contact Us
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 13L13 3M13 3H6M13 3V10"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ─── FAQ Item ─────────────────────────────────────────────────────────────────
function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[#252525] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-[#1a1a1a] hover:bg-[#1f1f1f] transition-colors duration-200"
      >
        <span className="text-white text-sm font-semibold font-['Montserrat']">
          {question}
        </span>
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            open ? "bg-[#2979FF]" : "bg-[#252525]"
          }`}
        >
          <span className="text-white text-sm font-bold leading-none">
            {open ? "−" : "+"}
          </span>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: smoothEase }}
            className="overflow-hidden"
          >
            <div className="px-5 py-4 bg-[#161616] border-t border-[#252525]">
              <p className="text-gray-400 text-sm leading-relaxed font-['Montserrat']">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main Content ─────────────────────────────────────────────────────────────
function ServiceContent({ service }: { service: Service }) {
  const words = service.title.split(" ");
  const firstWord = words[0];
  const restWords = words.slice(1).join(" ");

  // Custom breadcrumb items for service page
  const breadcrumbItems = [
    { label: "Home", path: "/", isLast: false },
    { label: "Services", path: "/services", isLast: false },
    { label: service.title, path: "#", isLast: true },
  ];

  return (
    <motion.div
      key={service.slug}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: smoothEase }}
      className="flex-1 min-w-0"
    >
      {/* General Info */}
      <section className="mb-10">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-5 font-['Montserrat']">
          General information FAQs
        </h2>
        <div className="overflow-hidden rounded-2xl mb-6">
          <motion.img
            src={service.image}
            alt={service.title}
            className="w-full h-[300px] sm:h-[380px] object-cover"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, ease: smoothEase }}
          />
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 font-['Montserrat']">
          {service.heroDescription}
        </p>
        <p className="text-gray-400 text-sm leading-relaxed font-['Montserrat']">
          {service.detailDescription}
        </p>
      </section>

      {/* Benefits */}
      <section className="mb-10">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 font-['Montserrat']">
          Benefits{" "}
          <span className="text-[#2979FF]">{service.title.toLowerCase()}</span>
        </h2>
        <p className="text-gray-400 text-sm mb-5 font-['Montserrat']">
          {service.title} enhances your online presence, boosts user engagement,
          and drives business growth with responsive, secure, and customized
          solutions tailored to meet your goals.
        </p>
        <div className="bg-[#1a1a1a] rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {service.benefits.map((benefit, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#2979FF] flex items-center justify-center flex-shrink-0">
                <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 6L5 9L10 3"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-gray-300 text-sm font-['Montserrat']">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Images */}
      <section className="mb-10">
        <div className="grid grid-cols-2 gap-4">
          {service.galleryImages.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-2xl">
              <motion.img
                src={src}
                alt={`${service.title} gallery ${i + 1}`}
                className="w-full h-[180px] sm:h-[220px] object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: smoothEase }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Process Steps */}
      <section className="mb-10">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 font-['Montserrat']">
          Design process
        </h2>
        <p className="text-gray-400 text-sm mb-6 font-['Montserrat']">
          The design process is a structured approach to creating solutions,
          combining research, creativity, and iterative development to deliver
          functional, user-centric, and visually appealing results.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {service.processSteps.map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="bg-[#1a1a1a] border border-[#252525] rounded-2xl p-5 cursor-default"
            >
              <div className="w-9 h-9 bg-[#252525] rounded-xl flex items-center justify-center mb-4 text-lg">
                {step.icon}
              </div>
              <h3 className="text-white font-bold text-sm mb-2 font-['Montserrat']">
                {step.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed font-['Montserrat']">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-5 rounded-full bg-[#2979FF] flex items-center justify-center">
            <svg width="8" height="8" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 2L8 14M2 8L14 8"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="text-[#2979FF] text-xs font-semibold font-['Montserrat']">
            Contact us
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 font-['Montserrat']">
          Find your answers here
        </h2>
        <div className="flex flex-col gap-3">
          {service.faqs.map((faq, i) => (
            <FaqItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>
    </motion.div>
  );
}

// ─── Page Export ──────────────────────────────────────────────────────────────
export default function ServiceSinglePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Find service from URL slug; fall back to first service
  const activeService = services.find((s) => s.slug === slug) ?? services[0];

  // Custom breadcrumb items for service page
  const breadcrumbItems = [
    { label: "Home", path: "/", isLast: false },
    { label: "Services", path: "/services", isLast: false },
    { label: activeService.title, path: "#", isLast: true },
  ];

  // If slug doesn't match any service, redirect to first service
  useEffect(() => {
    if (slug && !services.find((s) => s.slug === slug)) {
      navigate(`/services/${services[0].slug}`, { replace: true });
    }
  }, [slug, navigate]);

  const handleSidebarSelect = (newSlug: string) => {
    navigate(`/services/${newSlug}`);
  };

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.05 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) setHasAnimated(true);
  }, [isInView, hasAnimated]);

  const words = activeService.title.split(" ");
  const firstWord = words[0];
  const restWords = words.slice(1).join(" ");

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-[#111111] font-['Montserrat'] overflow-x-hidden"
    >
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-8 sm:pt-10 pb-12 sm:pb-16">
        {/* Title Section with Breadcrumb - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: smoothEase }}
          className="bg-[#1e1e1e] rounded-[20px] p-6 sm:p-8 lg:p-10 mb-6 sm:mb-8"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            {firstWord}{" "}
            {restWords && <span className="text-[#2979FF]">{restWords}</span>}
          </h1>
          {/* Breadcrumb under title - Same as BlogSinglePage */}
          <div className="mt-2">
            <Breadcrumb customItems={breadcrumbItems} />
          </div>
        </motion.div>

        {/* Content with Sidebar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: smoothEase }}
          className="flex flex-col lg:flex-row gap-8"
        >
          {/* Sidebar */}
          <aside className="w-full lg:w-[260px] flex-shrink-0">
            <ServicesSidebar
              services={services}
              activeSlug={activeService.slug}
              onSelect={handleSidebarSelect}
            />
          </aside>

          {/* Main Content */}
          <ServiceContent service={activeService} />
        </motion.div>
      </div>
    </div>
  );
}
