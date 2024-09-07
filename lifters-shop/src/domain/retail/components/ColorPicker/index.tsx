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
}

const ColorPicker: React.FC<ColorPickerProps> = ({ children }) => {
  const [activeColor, setActiveColor] = React.useState<keyof Colors | "">("");

  const handleActiveColor = (color: keyof Colors) => {
    setActiveColor(color);
  };

  const firstRowColors = colorArray.slice(0, Math.ceil(colorArray.length / 2));
  const secondRowColors = colorArray.slice(Math.ceil(colorArray.length / 2));

  return (
    <div className="d-flex flex-column gap-1">
      <div className="d-flex flex-row gap-1">
        {firstRowColors.map(([name, color]) => (
          <ColorPickerItem
            key={name}
            size={ColorPickerItemSize.Medium}
            color={color}
            activeColor={activeColor === name ? name : ""}
            setActive={() => handleActiveColor(name)}
          />
        ))}
      </div>
      <div className="d-flex flex-row gap-1">
        {secondRowColors.map(([name, color]) => (
          <ColorPickerItem
            key={name}
            size={ColorPickerItemSize.Medium}
            color={color}
            activeColor={activeColor === name ? name : ""}
            setActive={() => handleActiveColor(name)}
          />
        ))}
      </div>
      {children}
    </div>
  );
};

export default React.memo(ColorPicker);
