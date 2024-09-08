import React, { useCallback } from "react";
import styles from "./SizePickerItem.module.scss";
import { SizeItemSize, SizeItemValue } from "./data";
import Typography from "../UI/Typography";
import { FontSize, FontWeight } from "../UI/Typography/data";

interface SizePickerItemProps {
  size: SizeItemSize;
  sizeValue: SizeItemValue;
  theme: "dark" | "light";
  customBorder?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const SizePickerItem: React.FC<SizePickerItemProps> = ({
  size,
  sizeValue,
  isActive,
  theme,
  customBorder,
  onClick,
}) => {
  const handleClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  return (
    <div
      className={`${styles["size-picker-item-container"]} ${
        isActive ? styles["active"] : ""
      } ${
        theme === "dark"
          ? styles["size-picker-item-dark"]
          : styles["size-picker-item-light"]
      }`}
      style={{
        width: size,
        height: size,
        border: customBorder?.length ? customBorder : "none",
      }}
      onClick={handleClick}
    >
      <Typography
        variant="publicSans"
        size={size === SizeItemSize.SMALL ? FontSize.XXS : FontSize.SSM}
        sx={size === SizeItemSize.SMALL ? { width: 'fit-content' } : {}}
        fontWeight={FontWeight.SEMI_BOLD}
        color={
          isActive
            ? theme === "dark"
              ? "dark"
              : "white"
            : theme === "dark"
            ? "white"
            : "dark"
        }
      >
        {sizeValue}
      </Typography>
    </div>
  );
};

export default React.memo(SizePickerItem);
