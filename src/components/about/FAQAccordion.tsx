import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Button, { ArrowRightIcon } from "../button";

interface FAQProps {
  buttonText?: string;
  buttonLink?: string;
  onButtonClick?: () => void;
  bgColor?: string;
  className?: string;
}

const faqs = [
  {
    question: "What services does your agency provide?",
    answer:
      "We specialize in including graphic design, branding, website design and development, UX/UI design, social media marketing, digital advertising, video production, and content creation.",
  },
  {
    question: "Who are your typical clients?",
    answer:
      "Our clients range from startups and small businesses to established enterprises across various industries including tech, retail, healthcare, and finance.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on scope and complexity. A simple branding project may take 2–4 weeks, while a full website build can range from 6–12 weeks.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "We offer flexible pricing models including fixed-price packages, hourly rates, and retainer agreements. We tailor our approach based on your project needs and budget.",
  },
  {
    question: "Why are UX and UI important?",
    answer:
      "Great UX and UI design directly impact user satisfaction, retention, and conversion rates. A well-designed interface builds trust and ensures your product is intuitive and enjoyable to use.",
  },
];

const smoothEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const PlusIcon = () => (
  <svg
    className="w-4 h-4 text-blue-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const MinusIcon = () => (
  <svg
    className="w-4 h-4 text-blue-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const NavPlusIcon = () => (
  <svg
    className="w-3.5 h-3.5 text-blue-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const FAQItem: React.FC<{
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  isAnimated: boolean;
  delay: number;
}> = ({ faq, index, isOpen, onToggle, isAnimated, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={
        isAnimated
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 30, scale: 0.98 }
      }
      transition={{
        duration: 0.5,
        delay: isAnimated ? delay + index * 0.08 : 0,
        ease: smoothEase,
      }}
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: "#1a1a1a",
        border: "1px solid #2a2a2a",
      }}
    >
      <motion.button
        className="w-full flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 text-left"
        onClick={onToggle}
        whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
        transition={{ duration: 0.2 }}
      >
        <motion.span
          className="text-sm sm:text-base font-bold text-white pr-3 sm:pr-4 leading-relaxed"
          initial={{ opacity: 0, x: -10 }}
          animate={isAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
          transition={{
            duration: 0.4,
            delay: isAnimated ? delay + index * 0.08 + 0.1 : 0,
            ease: smoothEase,
          }}
        >
          {faq.question}
        </motion.span>

        <motion.span
          className="flex-shrink-0"
          initial={{ rotate: 0, scale: 0 }}
          animate={
            isAnimated ? { rotate: 0, scale: 1 } : { rotate: 0, scale: 0 }
          }
          transition={{
            duration: 0.3,
            delay: isAnimated ? delay + index * 0.08 + 0.15 : 0,
            ease: "backOut",
          }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: smoothEase }}
          >
            {isOpen ? <MinusIcon /> : <PlusIcon />}
          </motion.div>
        </motion.span>
      </motion.button>

      <motion.div
        initial={false}
        animate={{
          maxHeight: isOpen ? "500px" : "0px",
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: smoothEase,
        }}
        style={{
          overflow: "hidden",
        }}
      >
        <motion.p
          className="px-4 sm:px-6 pb-4 sm:pb-6 text-xs sm:text-sm leading-relaxed"
          style={{ color: "#9ca3af" }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {faq.answer}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default function FAQ({
  buttonText = "All Team Members",
  buttonLink,
  onButtonClick,
  bgColor = "#111111",
  className = "",
}: FAQProps) {
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [openIndex, setOpenIndex] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      setIsLoaded(true);
    }
  }, [isInView, hasAnimated]);

  const handleToggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? -1 : i));
  };

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };

  const renderAnimatedText = (text: string, baseDelay = 0) => {
    return text.split("").map((letter, index) => {
      const delay = baseDelay + index * 0.02;
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
    <section
      ref={sectionRef}
      className={`py-12 sm:py-16 lg:py-20 overflow-hidden ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12">
          <div>
            {/* Label with sparkle animation */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={
                hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
              }
              transition={{ duration: 0.5, delay: 0.2, ease: smoothEase }}
              className="flex items-center gap-2 mb-3 sm:mb-4"
            >
              <motion.div
                initial={{ rotate: 0, scale: 0 }}
                animate={
                  hasAnimated
                    ? { rotate: 360, scale: 1 }
                    : { rotate: 0, scale: 0 }
                }
                transition={{ duration: 0.6, delay: 0.3, ease: "backOut" }}
              >
                <NavPlusIcon />
              </motion.div>
              <span
                className="text-xs sm:text-sm font-medium text-white tracking-widest uppercase"
                style={{ letterSpacing: "0.1em" }}
              >
                FAQ's
              </span>
            </motion.div>

            {/* Heading with letter-by-letter animation */}
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white"
              style={{
                lineHeight: 1.1,
              }}
            >
              <span className="block">
                {renderAnimatedText("Everything you need ", 0.4)}
                <span className="inline-block">
                  {renderAnimatedText(
                    "to know",
                    0.4 + "Everything you need ".length * 0.02,
                  )}
                </span>
              </span>
            </h2>
          </div>

          {/* Button with scale animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              hasAnimated
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.5, delay: 0.6, ease: smoothEase }}
            className="w-full sm:w-auto"
          >
            {buttonLink ? (
              <Button
                size="default"
                variant="primary"
                href={buttonLink}
                className="w-full sm:w-auto"
              >
                {buttonText}
                <ArrowRightIcon className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            ) : (
              <Button
                size="default"
                variant="primary"
                onClick={handleButtonClick}
                className="w-full sm:w-auto"
              >
                {buttonText}
                <ArrowRightIcon className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            )}
          </motion.div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* FAQ Accordion */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => handleToggle(i)}
                isAnimated={hasAnimated}
                delay={0.7}
              />
            ))}
          </div>

          {/* Image - Responsive sizing for all devices */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={
              hasAnimated
                ? { opacity: 1, x: 0, scale: 1 }
                : { opacity: 0, x: 50, scale: 0.95 }
            }
            transition={{
              duration: 0.7,
              delay: 0.5,
              ease: smoothEase,
            }}
            className="rounded-3xl overflow-hidden sticky top-24
              /* Responsive height and width */
              w-full
              /* Mobile: smaller height */
              h-[280px] sm:h-[320px] md:h-[380px] lg:h-[491px]
              /* Optional: add max-height for very large screens */
              xl:h-[520px]
              /* Ensure image covers nicely */
              relative"
          >
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
              alt="Team member thinking"
              className="w-full h-full object-cover"
              style={{ display: "block" }}
            />

            {/* Subtle gradient overlay on image */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"
              initial={{ opacity: 0 }}
              animate={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            />
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
