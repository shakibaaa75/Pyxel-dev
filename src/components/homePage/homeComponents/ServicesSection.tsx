"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  type Transition,
} from "framer-motion";
import {
  ArrowUpRight,
  LayoutTemplate,
  Code,
  Settings,
  TrendingUp,
  ShoppingBag,
  Search,
  MoveRight,
} from "lucide-react";

// --- Types ---
interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

// --- Data ---
const services: ServiceItem[] = [
  {
    id: "dev",
    title: "Website Development",
    description:
      "We build robust, scalable websites using modern frameworks to ensure high performance.",
    icon: <Code size={24} />,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: "design",
    title: "Website Design",
    description:
      "Creating intuitive and visually stunning user interfaces that drive engagement.",
    icon: <LayoutTemplate size={24} />,
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: "maint",
    title: "Website Maintenance",
    description:
      "Regular updates, security patches, and performance monitoring for your site.",
    icon: <Settings size={24} />,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    description:
      "Strategic campaigns to boost your online presence and drive qualified traffic.",
    icon: <TrendingUp size={24} />,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: "ecom",
    title: "Ecommerce",
    description:
      "End-to-end ecommerce solutions to maximize sales and improve customer experience.",
    icon: <ShoppingBag size={24} />,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: "seo",
    title: "Search Engine Optimization",
    description:
      "Improving your visibility on search engines to attract organic growth.",
    icon: <Search size={24} />,
    image:
      "https://images.unsplash.com/photo-1572177812156-58036aae439c?auto=format&fit=crop&q=80&w=1600",
  },
];

// --- Smooth Easing Curves ---
const smoothEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

// --- Spring Transition Configs ---
const springTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
  mass: 1,
};

const buttonSpring: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 15,
  delay: 0.3,
};

// --- Components ---
export default function ServiceShowcase() {
  const [activeService, setActiveService] = useState<ServiceItem>(services[0]);
  const [clickedButton, setClickedButton] = useState<string | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [imageKey, setImageKey] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const handleButtonClick = (serviceId: string) => {
    setClickedButton(serviceId);
    const service = services.find((s) => s.id === serviceId);
    if (service) {
      setActiveService(service);
      setImageKey((prev) => prev + 1); // Force image refresh
    }
    setTimeout(() => {
      setClickedButton(null);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-[#161616] flex items-center justify-center p-4 md:p-8 font-sans relative overflow-hidden">
      {/* Rotating Background Ball Image - Bottom Right */}
      <motion.div
        className="absolute bottom-18 right-[-170px] pointer-events-none z-0"
        style={{ width: 390, height: 390 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <img
          src="/images/ball.png"
          alt="Decorative ball"
          className="w-full h-full object-contain opacity-60"
        />
      </motion.div>

      <div
        ref={sectionRef}
        className="w-full max-w-[1400px] mx-auto flex flex-col xl:flex-row gap-8 xl:gap-16 items-start justify-center relative z-10"
      >
        {/* Left Column: Service List */}
        <div className="flex flex-col gap-4 w-[480px] max-w-full mx-auto xl:mx-0 shrink-0">
          {services.map((service, index) => {
            const isActive = activeService.id === service.id;
            const isClicked = clickedButton === service.id;

            // Arrow rotation: 0deg for active button, -40deg for inactive
            const arrowRotation = isActive ? 0 : -40;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={
                  hasAnimated
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 50, scale: 0.95 }
                }
                transition={{
                  duration: 0.8,
                  delay: hasAnimated ? index * 0.12 + 0.1 : 0,
                  ease: smoothEase,
                }}
              >
                <motion.button
                  onClick={() => handleButtonClick(service.id)}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={springTransition}
                  className={`
                    group relative w-full transition-colors duration-500 ease-out
                    ${isActive ? "bg-[#2E6BFF]" : "bg-[#1a1a1a] hover:bg-[#252525]"}
                  `}
                  style={{
                    width: "480px",
                    maxWidth: "100%",
                    height: "86px",
                    border: isActive
                      ? "1px solid #4a85ff"
                      : "1px solid #FFFFFF1A",
                    borderRadius: "30px",
                    boxShadow: isActive
                      ? "0 20px 40px -15px rgba(46, 107, 255, 0.4)"
                      : "0 4px 20px -10px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <div className="flex items-center justify-between w-full h-full px-5">
                    <div className="flex items-center gap-4 min-w-0">
                      <motion.div
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={springTransition}
                        className={`
                          p-2.5 rounded-xl transition-colors duration-500 border flex-shrink-0
                          ${isActive ? "bg-white/10 border-white/20 text-white" : "bg-[#0a0a0a] border-[#2a2a2a] text-gray-400 group-hover:text-white group-hover:border-gray-600"}
                        `}
                      >
                        {service.icon}
                      </motion.div>

                      <span
                        className={`text-lg font-medium tracking-wide transition-colors duration-500 truncate ${isActive ? "text-white" : "text-gray-300"}`}
                      >
                        {service.title}
                      </span>
                    </div>

                    {/* Arrow Icon - Stays at 0deg for active button, -40deg for inactive */}
                    <motion.div
                      animate={{
                        rotate: arrowRotation,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeOut",
                      }}
                      className={`
                        w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-500 flex-shrink-0 ml-3
                        ${isActive ? "bg-white text-[#2E6BFF]" : "bg-[#0f0f0f] text-gray-500 group-hover:bg-[#2a2a2a] group-hover:text-white"}
                      `}
                    >
                      <MoveRight size={18} strokeWidth={2.5} />
                    </motion.div>
                  </div>
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Right Column: Image Display - FAST image switching */}
        <motion.div
          className="relative overflow-hidden bg-[#161616] shrink-0"
          style={{
            width: "830px",
            maxWidth: "100%",
            height: "626px",
            borderRadius: "2rem",
          }}
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={
            hasAnimated
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 60, scale: 0.95 }
          }
          transition={{
            duration: 1,
            delay: hasAnimated ? 0.4 : 0,
            ease: smoothEase,
          }}
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-[#2E6BFF]/20 to-purple-500/20 rounded-[2.5rem] blur-3xl opacity-50 -z-10" />

          {/* Use key to force immediate re-render on image change */}
          <div key={imageKey} className="absolute inset-0 w-full h-full">
            <img
              src={activeService.image}
              alt={activeService.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlay and content - these can animate independently */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          <motion.div
            className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-black/90 via-black/60 to-transparent backdrop-blur-[3px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: smoothEase }}
            key={`overlay-${activeService.id}`}
          />

          <div className="absolute bottom-0 left-0 right-0 p-10 flex justify-between items-end z-10">
            <div className="max-w-[80%]">
              <motion.h3
                key={`title-${activeService.id}`}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: smoothEase }}
                className="text-3xl font-semibold text-white mb-3"
              >
                {activeService.title}
              </motion.h3>
              <motion.p
                key={`desc-${activeService.id}`}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1, ease: smoothEase }}
                className="text-gray-300 text-base leading-relaxed line-clamp-3"
              >
                {activeService.description}
              </motion.p>
            </div>

            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={buttonSpring}
              whileHover={{
                scale: 1.15,
                rotate: 5,
                boxShadow: "0 20px 40px -10px rgba(46, 107, 255, 0.5)",
              }}
              whileTap={{ scale: 0.9 }}
              className="flex-shrink-0 w-14 h-14 rounded-full bg-[#2E6BFF] hover:bg-[#1d5af5] flex items-center justify-center transition-colors duration-300 shadow-lg shadow-blue-900/40"
            >
              <ArrowUpRight className="text-white w-7 h-7" strokeWidth={2.5} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
