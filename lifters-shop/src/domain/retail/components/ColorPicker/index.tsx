import React from "react";
import { Color, colorsData } from "@/model/colors";
import ColorPickerItem from "@/components/ColorPickerItem";
import { ColorPickerItemSize } from "@/components/ColorPickerItem/data";

interface ColorPickerProps {
  children?: React.ReactNode;
  size: ColorPickerItemSize;
  colors?: Color[];
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  children,
  size,
  colors,
}) => {
  const [activeColor, setActiveColor] = React.useState<string | "">("");
  const colorArray = Object.entries(colorsData) as Color[];

  const handleActiveColor = React.useCallback((color: string) => {
    setActiveColor(color);
  }, []);

  const colorPalette = colors !== undefined ? colors : colorArray;
  console.log("colorPalette", colorPalette);

  const firstRowColors = colorPalette.slice(
    0,
    Math.ceil(colorPalette.length / 2)
  );
  const secondRowColors = colorPalette.slice(
    Math.ceil(colorPalette.length / 2)
  );

  return (
    <div className="d-flex flex-column gap-1">
      <div className="d-flex flex-row gap-1">
        {firstRowColors.map(([color, hex]) => (
          <ColorPickerItem
            key={color}
            size={size}
            color={hex}
            isActive={activeColor === hex}
            onClick={() => handleActiveColor(hex)}
          />
        ))}
      </div>
      <div className="d-flex flex-row gap-1">
        {secondRowColors.map(([color, hex]) => (
          <ColorPickerItem
            key={color}
            size={size}
            color={hex}
            isActive={activeColor === hex}
            onClick={() => handleActiveColor(hex)}
          />
        ))}
      </div>
      {children}
    </div>
  );
};

export default React.memo(ColorPicker);
