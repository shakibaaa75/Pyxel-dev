import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// --- Types ---

interface Logo {
  id: number;
  name: string;
  svg: React.ReactNode;
}

// --- Mock Data: Logoipsum SVGs (Placeholders) ---
// These mimic the style of the logos in your screenshot.
// You can replace the 'path' data with your real SVGs.

const logos: Logo[] = [
  {
    id: 1,
    name: "Logoipsum 1",
    svg: (
      <svg viewBox="0 0 300 100" fill="currentColor" className="w-full h-full">
        <circle
          cx="40"
          cy="50"
          r="25"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
        />
        <circle cx="40" cy="50" r="8" fill="currentColor" />
        <text
          x="75"
          y="60"
          fontFamily="Montserrat, sans-serif"
          fontWeight="bold"
          fontSize="32"
        >
          logoipsum
        </text>
      </svg>
    ),
  },
  {
    id: 2,
    name: "Logoipsum 2",
    svg: (
      <svg viewBox="0 0 300 100" fill="currentColor" className="w-full h-full">
        <path
          d="M20,50 Q50,10 80,50 T140,50"
          stroke="currentColor"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
        />
        <text
          x="160"
          y="60"
          fontFamily="Montserrat, sans-serif"
          fontWeight="bold"
          fontSize="32"
        >
          Logoipsum
        </text>
      </svg>
    ),
  },
  {
    id: 3,
    name: "Logoipsum 3",
    svg: (
      <svg viewBox="0 0 300 100" fill="currentColor" className="w-full h-full">
        <rect
          x="20"
          y="20"
          width="60"
          height="60"
          rx="15"
          fill="currentColor"
          opacity="0.8"
        />
        <rect
          x="35"
          y="35"
          width="30"
          height="30"
          rx="8"
          fill="currentColor"
          opacity="0.5"
        />
        <text
          x="95"
          y="60"
          fontFamily="Montserrat, sans-serif"
          fontWeight="bold"
          fontSize="32"
        >
          logoipsum
        </text>
      </svg>
    ),
  },
  {
    id: 4,
    name: "Logoipsum 4",
    svg: (
      <svg viewBox="0 0 300 100" fill="currentColor" className="w-full h-full">
        <path
          d="M20,80 L50,20 L80,80 L110,20 L140,80"
          stroke="currentColor"
          strokeWidth="10"
          fill="none"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <text
          x="160"
          y="60"
          fontFamily="Montserrat, sans-serif"
          fontWeight="bold"
          fontSize="32"
        >
          LOGOIPSUM
        </text>
      </svg>
    ),
  },
  {
    id: 5,
    name: "Logoipsum 5",
    svg: (
      <svg viewBox="0 0 300 100" fill="currentColor" className="w-full h-full">
        <path
          d="M50,20 A30,30 0 1,0 50,80 A30,30 0 1,0 50,20 M50,35 A15,15 0 1,1 50,65 A15,15 0 1,1 50,35 M50,50 L80,50"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />
        <text
          x="100"
          y="60"
          fontFamily="Montserrat, sans-serif"
          fontWeight="bold"
          fontSize="32"
        >
          logoipsum
        </text>
      </svg>
    ),
  },
];

// --- Components ---

const TrustedBySection = () => {
  // Duplicate the logos array to create a seamless loop effect
  const duplicatedLogos = [...logos, ...logos];
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
    <section className="relative w-full bg-[#161616] pt-5 pb-16 overflow-hidden flex flex-col items-center justify-center">
      {/* Header Text - Using Montserrat from hero section */}
      <div className="mb-8 text-center px-4">
        <h2 className="font-['Montserrat'] text-white text-[16px] sm:text-xl md:text-2xl font-medium tracking-tight">
          {renderAnimatedText("Trusted by ", 0)}
          <span className="font-bold">
            {renderAnimatedText("20,000+ ", 0.15)}
          </span>
          {renderAnimatedText("Customer across Canada", 0.3)}
        </h2>
      </div>

      {/* Marquee Container */}
      <div
        className={`relative w-full max-w-7xl mx-auto transition-all duration-400 ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: "0.5s" }}
      >
        {/* Fade Masks for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#161616] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#161616] to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex overflow-hidden group">
          <motion.div
            className="flex gap-16 items-center shrink-0 py-2"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 30,
              repeat: Infinity,
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="relative w-48 h-16 flex items-center justify-center shrink-0 cursor-pointer"
              >
                {/* 
                  The Logo SVG 
                  - 'text-gray-500' sets the default gray color.
                  - 'group-hover:text-white' changes color on hover.
                  - 'transition-colors duration-300' makes it smooth.
                */}
                <div className="w-full h-full text-gray-500 hover:text-white transition-colors duration-300 ease-out">
                  {logo.svg}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Line at the bottom (Subtle) */}
      <div
        className={`absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent transition-all duration-500 ease-out ${
          isLoaded ? "opacity-50" : "opacity-0"
        }`}
        style={{ transitionDelay: "0.7s" }}
      />
    </section>
  );
};

export default TrustedBySection;
