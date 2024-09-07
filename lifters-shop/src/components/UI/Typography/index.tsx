import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

type Variant = "inter" | "publicSans";

interface TypographyProps {
  children?: React.ReactNode;
  variant?: Variant;
  bold?: boolean;
  color?: "white" | "dark";
  heading?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "inter",
  bold = false,
  color,
  heading,
}) => {
  const fontClass =
    variant === "publicSans" ? "font-public-sans" : "font-inter";
  const fontWeight = bold ? "fw-bold" : "fw-normal";
  const textColor = color ? `text-${color}` : "";
  const Heading = heading || "p";

  return (
    <Heading className={`mb-0 ${fontClass} ${fontWeight} ${textColor}`}>
      {children}
    </Heading>
  );
};

export default React.memo(Typography);
