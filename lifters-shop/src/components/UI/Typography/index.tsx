import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Typography.module.scss";

type Variant = "inter" | "publicSans";
interface TypographyProps {
  children?: React.ReactNode;
  variant?: Variant;
  bold?: boolean;
  color?: "white" | "dark" | "primary" | "secondary";
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
    variant === "publicSans" ? styles["font-public-sans"] : styles["font-inter"];
  const fontWeight = bold ? styles["fw-bold"] : styles["fw-normal"];
  const textColor = color ? styles[`text-${color}`] : "";
  const Heading = heading || "p";

  return (
    <Heading className={`${styles["mb-0"]} ${fontClass} ${fontWeight} ${textColor}`}>
      {children}
    </Heading>
  );
};

export default React.memo(Typography);
