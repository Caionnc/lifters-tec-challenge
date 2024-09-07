import React, { useCallback } from "react";
import { Colors } from "@/model/colors";
import { ColorPickerItemSize } from "./data";

interface ColorPickerItemProps {
  size: ColorPickerItemSize;
  color: string;
  activeColor: keyof Colors | "";
  setActive: () => void;
}

const ColorPickerItem: React.FC<ColorPickerItemProps> = ({
  size,
  color,
  activeColor,
  setActive,
}) => {
  const handleActiveColor = useCallback(() => {
    setActive();
  }, [setActive]);

  return (
    <div
      className={`border ${
        activeColor ? "border-dark" : ""
      } ${size}`}
      style={{ backgroundColor: color, cursor: "pointer", width: size, height: "30px", borderRadius: "50%" }}
      onClick={handleActiveColor}
    ></div>
  );
};

export default React.memo(ColorPickerItem);
