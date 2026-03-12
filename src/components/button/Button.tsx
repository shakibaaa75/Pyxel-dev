import React from "react";

// Types
export type ButtonVariant = "primary" | "secondary" | "outline";
export type ButtonSize = "small" | "default" | "large";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  href?: string; // For link functionality
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "default",
  fullWidth = false,
  className = "",
  type = "button",
  href,
  ...props
}) => {
  // Base classes
  const baseClasses =
    "relative overflow-hidden font-semibold transition-all duration-300 rounded-2xl flex items-center gap-2 group";

  // Size classes matching your exact styling
  const sizeClasses = {
    small: "px-4 py-2 text-xs",
    default: "px-6 py-3 text-sm xl:px-8 xl:py-4 xl:text-base",
    large: "px-8 py-4 text-base xl:px-10 xl:py-5 xl:text-lg",
  };

  // Variant classes - primary matches your exact button style
  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-700 to-blue-500 text-white",
    secondary: "bg-gray-800 text-white",
    outline: "border-2 border-blue-500 text-blue-500",
  };

  // Width class
  const widthClass = fullWidth ? "w-full" : "";

  // Text color on hover - different for each variant
  const hoverTextClasses = {
    primary: "group-hover:text-blue-700",
    secondary: "group-hover:text-gray-900",
    outline: "group-hover:text-white",
  };

  // Overlay color based on variant
  const overlayColor = {
    primary: "bg-white",
    secondary: "bg-white",
    outline: "bg-blue-500",
  };

  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${widthClass}
    ${className}
  `;

  const content = (
    <>
      {/* Skewed overlay matching your exact style */}
      <span
        className={`
          absolute inset-0 
          ${overlayColor[variant]} 
          transform -skew-x-12 -translate-x-full 
          group-hover:translate-x-0 
          transition-transform duration-500 
          ease-in-out
        `}
        style={{
          width: "120%",
          left: "-15%",
          height: "106%",
          top: "-3%",
        }}
      ></span>

      {/* Content with hover color change */}
      <span
        className={`
        relative z-10 flex items-center justify-center gap-2 w-full
        transition-colors duration-300
        ${hoverTextClasses[variant]}
      `}
      >
        {children}
      </span>
    </>
  );

  // If href is provided, render as an anchor tag
  if (href) {
    return (
      <a href={href} className={buttonClasses} {...(props as any)}>
        {content}
      </a>
    );
  }

  // Otherwise render as button
  return (
    <button type={type} onClick={onClick} className={buttonClasses} {...props}>
      {content}
    </button>
  );
};

export default Button;
