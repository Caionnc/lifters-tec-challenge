import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Typography.module.scss";
import { FontSize, FontWeight } from "./data";

type Variant = "inter" | "publicSans";
interface TypographyProps {
  children?: React.ReactNode;
  variant?: Variant;
  fontWeight: FontWeight;
  color?: "white" | "dark" | "primary" | "secondary";
  size: FontSize;
  sx?: React.CSSProperties;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "inter",
  fontWeight,
  color,
  size,
  sx
}) => {
  const fontClass =
    variant === "publicSans"
      ? styles["font-public-sans"]
      : styles["font-inter"];
  const fontWeightClass = styles[fontWeight];
  const textColor = color ? styles[`text-${color}`] : "";

  return (
    <p
      className={`${styles["mb-0"]} ${fontClass} ${fontWeightClass} ${textColor} ${styles[size]}`}
      style={sx}
    >
      {children}
    </p>
  );
};

export default React.memo(Typography);
