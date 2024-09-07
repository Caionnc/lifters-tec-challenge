import React from "react";
import { Colors } from "@/model/colors";
import ColorPickerItem from "@/components/ColorPickerItem";
import { ColorPickerItemSize } from "@/components/ColorPickerItem/data";

const colorArray: [keyof Colors, string][] = Object.entries({
  orange: "#DF9167",
  darkPurple: "#7B61FF",
  darkGreen: "#219653",
  darkBlue: "#2F80ED",
  red: "#EB5757",
  lightBlue: "#F2F2F2",
  darkGrey: "#4F4F4F",
  lightPurple: "#BB6BD9",
  white: "#F2F2F2",
  lightGreen: "#BB6BD9",
}) as [keyof Colors, string][];

interface ColorPickerProps {
  children?: React.ReactNode;
  size: ColorPickerItemSize;
  colors?: [keyof Colors, string][]; // Optional prop to allow custom color arrays
}

const ColorPicker: React.FC<ColorPickerProps> = ({ children, size, colors }) => {
  const [activeColor, setActiveColor] = React.useState<keyof Colors | "">("");

  const handleActiveColor = (color: keyof Colors) => {
    setActiveColor(color);
  };

  const colorPalette = colors ?? colorArray;

  const firstRowColors = colorPalette.slice(0, Math.ceil(colorPalette.length / 2));
  const secondRowColors = colorPalette.slice(Math.ceil(colorPalette.length / 2));

  return (
    <div className="d-flex flex-column gap-1">
      <div className="d-flex flex-row gap-1">
        {firstRowColors.map(([color, hex]) => (
          <ColorPickerItem
            key={color}
            size={size}
            color={color}
            isActive={activeColor === color}
            onClick={() => handleActiveColor(color)}
          />
        ))}
      </div>
      <div className="d-flex flex-row gap-1">
        {secondRowColors.map(([color, hex]) => (
          <ColorPickerItem
            key={color}
            size={size}
            color={color}
            isActive={activeColor === color}
            onClick={() => handleActiveColor(color)}
          />
        ))}
      </div>
      {children}
    </div>
  );
};

export default React.memo(ColorPicker);
