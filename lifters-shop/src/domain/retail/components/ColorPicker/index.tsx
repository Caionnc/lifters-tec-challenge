import React from "react";
import { colorsData } from "@/model/colors";
import ColorPickerItem from "@/components/ColorPickerItem";
import { ColorPickerItemSize } from "@/components/ColorPickerItem/data";
import { ProductColor } from "@/model/product";

interface ColorPickerProps {
  children?: React.ReactNode;
  size: ColorPickerItemSize;
  colors?: ProductColor[];
  setActiveColorOption: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  children,
  size,
  colors,
  setActiveColorOption,
}) => {
  const [activeColor, setActiveColor] = React.useState<string | "">("");
  const handleActiveColor = (color: string) => {
    setActiveColorOption(color);
    setActiveColor(color);
  };

  const colorPalette = colors !== undefined ? colors : colorsData;

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
        {firstRowColors.map((color) => (
          <ColorPickerItem
            key={color.nome}
            size={size}
            color={color.codigo}
            isActive={activeColor === color.codigo}
            onClick={() => handleActiveColor(color.codigo)}
          />
        ))}
      </div>
      <div className="d-flex flex-row gap-1">
        {secondRowColors.map((color) => (
          <ColorPickerItem
            key={color.nome}
            size={size}
            color={color.codigo}
            isActive={activeColor === color.codigo}
            onClick={() => handleActiveColor(color.codigo)}
          />
        ))}
      </div>
      {children}
    </div>
  );
};

export default React.memo(ColorPicker);
