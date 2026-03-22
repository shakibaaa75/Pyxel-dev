import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../../data/BlogPost";

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 8H13M13 8L9 4M13 8L9 12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BlogCard({
  post,
  index,
  isVisible,
}: {
  post: any;
  index: number;
  isVisible: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        bg-[#1a1a1a] rounded-[20px] overflow-hidden flex flex-col 
        transition-all duration-500 ease-out hover:-translate-y-1
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      `}
      style={{
        transitionDelay: `${index * 80}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <Link to={`/blogs/${post.slug}`} className="block overflow-hidden">
        <div className="w-full h-[220px] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out"
            style={{
              transform: isHovered ? "scale(1.06)" : "scale(1)",
            }}
            loading="lazy"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <Link to={`/blogs/${post.slug}`} className="no-underline">
          <h3
            className="text-[17px] font-bold leading-[1.45] mb-5 transition-colors duration-300"
            style={{
              color: isHovered ? "#2979FF" : "#ffffff",
            }}
          >
            {post.title}
          </h3>
        </Link>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-4 w-full" />

        {/* Footer Row */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-gray-500 text-sm">{post.date}</span>
          <Link
            to={`/blogs/${post.slug}`}
            className="group inline-flex items-center gap-2 text-[#2979FF] text-sm font-semibold no-underline transition-all duration-300 hover:gap-3"
          >
            Read More
            <span
              className={`
                rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 
                transition-all duration-300
                ${isHovered ? "bg-[#2979FF] rotate-0" : "bg-white -rotate-45"}
              `}
            >
              <ArrowIcon
                className={`transition-colors duration-300 ${
                  isHovered ? "text-white" : "text-[#2979FF]"
                }`}
              />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function BlogsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Custom breadcrumb items for blogs page
  const breadcrumbItems = [
    { label: "Home", path: "/", isLast: false },
    { label: "Blogs", path: "/blogs", isLast: true },
  ];

  return (
    <div
      ref={sectionRef}
      className="bg-[#111111] min-h-screen font-['Montserrat'] overflow-x-hidden"
    >
      {/* Hero / Banner */}
      <div className="pt-20 sm:pt-24 pb-0 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1300px] mx-auto">
          <div
            className={`
              bg-[#1e1e1e] rounded-[20px] p-8 sm:p-10 mb-8
              transition-all duration-700 ease-out
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              <span className="text-white block sm:inline">Latest </span>
              <span className="text-[#2979FF] block sm:inline">blog</span>
            </h2>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mt-3 text-sm text-gray-400">
              {breadcrumbItems.map((item, index) => (
                <React.Fragment key={item.label}>
                  {index > 0 && <span>/</span>}
                  <span className="hover:text-white transition-colors cursor-pointer">
                    {item.label}
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-8 lg:px-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
