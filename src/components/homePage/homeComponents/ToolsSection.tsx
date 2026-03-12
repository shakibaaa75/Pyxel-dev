import { useState, useRef, useEffect } from "react";
import { motion, useInView, type Transition } from "framer-motion";
import { Sparkles } from "lucide-react";
import Button, { ArrowRightIcon } from "../../button";

interface ToolItem {
  id: number;
  name: string;
  category: string;
  logo: string;
}

const tools: ToolItem[] = [
  {
    id: 1,
    name: "Figma",
    category: "Design Tool",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  },
  {
    id: 2,
    name: "Framer",
    category: "Design Tool",
    logo: "https://cdn.dribbble.com/userupload/32025683/file/original-2f0502fd7bd82b3566b9bcf62fc84c34.png?resize=200x200",
  },
  {
    id: 3,
    name: "Illustrator",
    category: "Design Tool",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/240px-Adobe_Illustrator_CC_icon.svg.png",
  },
  {
    id: 4,
    name: "Adobe Xd",
    category: "Design Tool",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/240px-Adobe_XD_CC_icon.svg.png",
  },
  {
    id: 5,
    name: "Indesign",
    category: "Design Tool",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/240px-Adobe_InDesign_CC_icon.svg.png",
  },
  {
    id: 6,
    name: "Photoshop",
    category: "Design Tool",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/240px-Adobe_Photoshop_CC_icon.svg.png",
  },
  {
    id: 7,
    name: "Lightroom",
    category: "Design Tool",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg/240px-Adobe_Photoshop_Lightroom_CC_logo.svg.png",
  },
  {
    id: 8,
    name: "Incopy",
    category: "Design Tool",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InCopy_CC_icon.svg/240px-Adobe_InCopy_CC_icon.svg.png",
  },
];

interface ToolsSectionProps {
  buttonText?: string;
  buttonLink?: string;
  onButtonClick?: () => void;
}

// --- Smooth Easing Curves ---
const smoothEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

// --- Spring Transition Configs ---
const springTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
  mass: 1,
};

const ToolCard: React.FC<{
  tool: ToolItem;
  isActive: boolean;
  onHover: () => void;
  index: number;
  hasAnimated: boolean;
}> = ({ tool, isActive, onHover, index, hasAnimated }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const showActiveStyles = isActive || isHovered;

  const getLogoContainerClasses = (): string => {
    let classes =
      "relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-xl overflow-hidden transition-all duration-300";

    if (showActiveStyles) {
      classes += " scale-110";
    }

    if (tool.name === "Figma") {
      classes += " bg-white p-1 sm:p-1.5";
    }

    if (tool.name === "Framer") {
      classes += " bg-gradient-to-br from-blue-500 to-purple-600";
    }

    return classes;
  };

  const getImageClasses = (): string => {
    let classes = "w-full h-full object-contain";

    if (tool.name === "Framer") {
      classes += " p-1 sm:p-1.5 invert";
    }

    return classes;
  };

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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        group relative flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl cursor-pointer
        overflow-hidden z-10 transition-all duration-300 ease-out
        border bg-transparent w-full
        ${
          showActiveStyles
            ? "text-white transform -translate-y-1 shadow-lg shadow-blue-900/30 border-transparent"
            : "text-gray-300 hover:text-white border-white/10"
        }
      `}
    >
      <div
        className={`
          absolute inset-0 bg-gradient-to-t from-[#0944A0] to-[#2A7DFF]
          transition-transform duration-500 ease-in-out -z-10
          ${
            showActiveStyles
              ? "scale-y-100 origin-bottom"
              : "scale-y-0 origin-top"
          }
        `}
      />

      <motion.div
        className={getLogoContainerClasses()}
        animate={{ scale: showActiveStyles ? 1.1 : 1 }}
        transition={springTransition}
      >
        <img
          src={tool.logo}
          alt={`${tool.name} logo`}
          className={getImageClasses()}
          loading="lazy"
        />
      </motion.div>

      <div className="flex flex-col min-w-0">
        <h3
          className={`
          font-['Montserrat'] text-base sm:text-lg font-semibold transition-colors duration-300 truncate
          ${showActiveStyles ? "text-white" : "text-white"}
        `}
        >
          {tool.name}
        </h3>
        <span
          className={`
          font-['Rethink_Sans'] text-xs sm:text-sm transition-colors duration-300
          ${showActiveStyles ? "text-blue-100" : "text-gray-500"}
        `}
        >
          {tool.category}
        </span>
      </div>
    </motion.div>
  );
};

const ToolsSection: React.FC<ToolsSectionProps> = ({
  buttonText = "Let's Get Started",
  buttonLink,
  onButtonClick,
}) => {
  const [activeId, setActiveId] = useState<number | null>(null);
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

  const handleHover = (id: number) => {
    setActiveId(id);
  };

  // Staggered text animation for header
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
    <section
      ref={sectionRef}
      className="w-full h-auto bg-[#0a0a0a] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-12"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10 sm:mb-12 lg:mb-16 gap-6">
          <div className="space-y-3 sm:space-y-4">
            {/* Label */}
            <motion.div
              className="flex items-center gap-2 text-[#2A7DFF]"
              initial={{ opacity: 0, y: 20 }}
              animate={
                hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.1, ease: smoothEase }}
            >
              <Sparkles className="w-4 h-4" />
              <span className="font-['Rethink_Sans'] text-xs sm:text-sm font-medium tracking-wide uppercase">
                Our Toolbox
              </span>
            </motion.div>

            {/* Title with staggered animation */}
            <h2 className="font-['Montserrat'] text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              <span className="text-white">
                {renderAnimatedText("Our Toolbox to ", 0.2)}
              </span>
              <span className="text-[#2A7DFF]">
                {renderAnimatedText(
                  "Innovation",
                  0.2 + "Our Toolbox to ".length * 0.01,
                )}
              </span>
            </h2>
          </div>

          {/* CTA Button */}
          <motion.div
            className="self-start lg:self-auto whitespace-nowrap"
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3, ease: smoothEase }}
          >
            {buttonLink ? (
              <Button size="default" variant="primary" href={buttonLink}>
                {buttonText}
                <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            ) : (
              <Button size="default" variant="primary" onClick={onButtonClick}>
                {buttonText}
                <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            )}
          </motion.div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {tools.map((tool, index) => (
            <ToolCard
              key={tool.id}
              tool={tool}
              isActive={activeId === tool.id}
              onHover={() => handleHover(tool.id)}
              index={index}
              hasAnimated={hasAnimated}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
