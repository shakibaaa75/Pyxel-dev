import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const values = [
  "Creativity and Innovation",
  "Client-Centricity",
  "Integrity and Transparency",
  "Excellence and Quality",
];

const smoothEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export default function AboutusFirstsec() {
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  // Custom breadcrumb items
  const breadcrumbItems = [
    { label: "Home", path: "/", isLast: false },
    { label: "About Us", path: "/about", isLast: true },
  ];

  return (
    <div
      ref={sectionRef}
      className="relative w-full bg-[#111111] font-['Montserrat'] overflow-x-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 pt-8 sm:pt-10 pb-12 sm:pb-16">
        {/* Header Section - Matching blog page design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: smoothEase }}
          className="bg-[#1e1e1e] rounded-[20px] p-6 sm:p-8 lg:p-10 mb-6 sm:mb-8"
        >
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            About our <span className="text-[#2A7DFF]">journey</span>
          </h1>
          {/* Breadcrumb under title - same as BlogSinglePage */}
          <div className="mt-2">
            <Breadcrumb customItems={breadcrumbItems} />
          </div>
        </motion.div>

        {/* Main Content - Two column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Team Image with animation */}
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.95 }}
            animate={
              hasAnimated
                ? { opacity: 1, x: 0, scale: 1 }
                : { opacity: 0, x: -30, scale: 0.95 }
            }
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: smoothEase,
            }}
            className="rounded-[24px] overflow-hidden bg-gray-800 relative"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80"
              alt="Creative team"
              className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
              loading="lazy"
            />
          </motion.div>

          {/* Right: Content with staggered animations */}
          <div className="flex flex-col gap-5 md:gap-6">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: smoothEase,
              }}
              className="flex items-center gap-2 text-[#2A7DFF] font-medium text-sm"
            >
              <span className="text-[#2A7DFF] text-lg">✦</span>
              About Us
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={
                hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{
                duration: 0.5,
                delay: 0.4,
                ease: smoothEase,
              }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white"
            >
              A team of <span className="text-[#2A7DFF]">creative</span>{" "}
              <span className="text-[#2A7DFF]">thinkers</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={
                hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{
                duration: 0.5,
                delay: 0.5,
                ease: smoothEase,
              }}
              className="text-gray-400 text-sm sm:text-base leading-relaxed"
            >
              We're a full-service design agency specializing in branding, web
              design, and creative strategies that elevate businesses.
            </motion.p>

            {/* Values List with staggered items */}
            <ul className="flex flex-col gap-3 mt-2">
              {values.map((value, index) => (
                <motion.li
                  key={value}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{
                    duration: 0.4,
                    delay: 0.6 + index * 0.08,
                    ease: smoothEase,
                  }}
                  className="flex items-center gap-3 text-white text-sm font-medium"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2A7DFF]">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </span>
                  {value}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          /* Improve touch targets */
          a, button {
            cursor: pointer;
            -webkit-tap-highlight-color: transparent;
          }
          
          /* Disable hover effects on mobile */
          .hover\\:scale-105:hover {
            transform: none !important;
          }
        }
        
        /* Performance optimization for animations */
        .opacity-0 {
          opacity: 0;
        }
        
        .opacity-100 {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
