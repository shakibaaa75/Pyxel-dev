import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { services } from "../../data/Servicesdata";
import type { Service } from "../../data/Servicesdata";

const smoothEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

function ArrowIcon({
  active,
  isHovered,
}: {
  active?: boolean;
  isHovered?: boolean;
}) {
  const showActive = active || isHovered;

  return (
    <div
      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
        showActive
          ? "bg-[#2979FF] -rotate-45"
          : "bg-[#2a2a2a] rotate-0 group-hover:bg-[#2979FF] group-hover:-rotate-45"
      }`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 13L13 3M13 3H6M13 3V10"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function ServiceCard({
  service,
  featured,
  index,
  hasAnimated,
}: {
  service: Service;
  featured?: boolean;
  index: number;
  hasAnimated: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={
        hasAnimated
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 50, scale: 0.95 }
      }
      transition={{
        duration: 0.8,
        delay: hasAnimated ? index * 0.08 + 0.3 : 0,
        ease: smoothEase,
      }}
      className="group bg-[#1a1a1a] rounded-2xl overflow-hidden cursor-pointer hover:bg-[#1f1f1f] transition-colors duration-200 p-5"
    >
      {/* Image with scale animation like team section */}
      <div className="overflow-hidden rounded-xl mb-3">
        <motion.img
          src={service.image}
          alt={service.title}
          className="w-full h-[250px] object-cover rounded-xl"
          initial={{ scale: 1.1 }}
          animate={hasAnimated ? { scale: 1 } : { scale: 1.1 }}
          transition={{
            duration: 0.8,
            delay: hasAnimated ? index * 0.08 + 0.35 : 0,
            ease: smoothEase,
          }}
          whileHover={{ scale: 1.05 }}
        />
      </div>

      {/* Content */}
      <div className="flex items-end justify-between gap-3 pt-4">
        <div className="flex-1">
          <h3 className="text-white font-bold text-[15px] mb-1.5 group-hover:text-[#2979FF] transition-colors duration-200">
            {service.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
        <ArrowIcon active={featured} />
      </div>
    </motion.div>
  );
}

export default function ServicesGridCards() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      setIsLoaded(true);
    }
  }, [isInView, hasAnimated]);

  // Custom breadcrumb items for services page
  const breadcrumbItems = [
    { label: "Home", path: "/", isLast: false },
    { label: "Services", path: "/services", isLast: true },
  ];

  const renderAnimatedText = (text: string, baseDelay = 0) => {
    return text.split("").map((letter, index) => {
      const delay = baseDelay + index * 0.01;
      return (
        <span
          key={index}
          className={`inline-block transition-all duration-200 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: `${delay}s` }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      );
    });
  };

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-[#111111] font-['Montserrat'] overflow-x-hidden"
    >
      {/* Hero Header - Matching Team Section Design */}
      <div className="pt-24 pb-0 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1300px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: smoothEase }}
            className="bg-[#1e1e1e] rounded-[20px] p-8 sm:p-10 mb-8"
          >
            {/* Main Heading with letter-by-letter animation */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              <span className="text-white block sm:inline">
                {renderAnimatedText("Explore our ", 0.2)}
              </span>
              <span className="text-[#2979FF] block sm:inline">
                {renderAnimatedText(
                  "services",
                  0.2 + "Explore our ".length * 0.01,
                )}
              </span>
            </h2>

            {/* Breadcrumb with staggered animation */}
            <div className="flex items-center gap-2 mt-3 text-sm text-gray-400">
              {breadcrumbItems.map((item, index) => (
                <React.Fragment key={item.label}>
                  {index > 0 && (
                    <span
                      className={`transition-all duration-200 ${
                        isLoaded
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                      style={{ transitionDelay: `${0.4 + index * 0.05}s` }}
                    >
                      /
                    </span>
                  )}
                  <span
                    className={`hover:text-white transition-colors cursor-pointer transition-all duration-200 ${
                      isLoaded
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${0.4 + index * 0.05}s` }}
                  >
                    {item.label}
                  </span>
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-8 lg:px-16 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              featured={index === 0}
              index={index}
              hasAnimated={hasAnimated}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
