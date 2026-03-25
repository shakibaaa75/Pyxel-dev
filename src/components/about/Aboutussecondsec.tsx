import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";

const values = [
  "Creativity and Innovation",
  "Client-Centricity",
  "Integrity and Transparency",
  "Excellence and Quality",
];

const smoothEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export default function AboutusSecondsec() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <div
      ref={sectionRef}
      className="bg-[#111111] text-white font-sans overflow-x-hidden"
    >
      <div className="max-w-[1350px] bg-[#1e1e1e] rounded-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Section 1: Our Vision */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left: Laptop Image */}
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
            className="rounded-[24px] overflow-hidden bg-[#1a1a1a]"
          >
            <img
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=700&q=80"
              alt="Laptop mockup"
              className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
              loading="lazy"
            />
          </motion.div>

          {/* Right: Content */}
          <div className="flex flex-col gap-5 md:gap-6">
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
              Our Vision
            </motion.div>

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
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
            >
              Driving the Future of{" "}
              <span className="text-[#2A7DFF]">Creativity</span>
            </motion.h2>

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

            <ul className="flex flex-col gap-3">
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
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2A7DFF] shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </span>
                  {value}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800" />

        {/* Section 2: Our Mission */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left: Content */}
          <div className="flex flex-col gap-5 md:gap-6 order-2 md:order-1">
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
              Our Mission
            </motion.div>

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
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
            >
              Bringing ideas to life through{" "}
              <span className="text-[#2A7DFF]">creativity</span>
            </motion.h2>

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

            <ul className="flex flex-col gap-3">
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
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2A7DFF] shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </span>
                  {value}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right: Phone Image */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={
              hasAnimated
                ? { opacity: 1, x: 0, scale: 1 }
                : { opacity: 0, x: 30, scale: 0.95 }
            }
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: smoothEase,
            }}
            className="rounded-[24px] overflow-hidden order-1 md:order-2"
          >
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700&q=80"
              alt="Mobile app mockup"
              className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
              loading="lazy"
            />
          </motion.div>
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
      `}</style>
    </div>
  );
}
