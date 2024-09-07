import React, { useCallback } from "react";
import { ColorPickerItemSize } from "./data";
import styles from "./ColorPickerItem.module.scss";

interface ColorPickerItemProps {
  size: ColorPickerItemSize;
  color: string;
  isActive: boolean;
  onClick: () => void;
}

const ColorPickerItem: React.FC<ColorPickerItemProps> = ({
  size,
  color,
  isActive,
  onClick,
}) => {
  const handleClick = useCallback(() => {
    onClick();
  }, [onClick]);

  return (
    <div
      className={`${styles["color-picker-item"]} ${
        isActive ? styles["active"] : ""
      }`}
      style={{
        backgroundColor: color,
        width: size,
        height: size,
      }}
      onClick={handleClick}
    ></div>
  );
};

export default React.memo(ColorPickerItem);
