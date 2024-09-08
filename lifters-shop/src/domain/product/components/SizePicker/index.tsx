import React from "react";
import { sizesData } from "./data";
import SizePickerItem from "@/components/SizePickerItem";
import { SizeItemSize, SizeItemValue } from "@/components/SizePickerItem/data";

interface SizePickerProps {
  children?: React.ReactNode;
  size: SizeItemSize;
  sizes?: string[];
  setActiveSizeOption: (size: SizeItemValue) => void;
}

const SizePicker: React.FC<SizePickerProps> = ({
  children,
  size,
  sizes,
  setActiveSizeOption,
}) => {
  const [activeSize, setActiveSize] = React.useState<SizeItemValue | "">("");
  const handleActiveSize = (size: SizeItemValue) => {
    setActiveSizeOption(size);
    setActiveSize(size);
  };

  const sizeOptions = sizes !== undefined ? sizes : sizesData;
  console.log("colorPalette", sizeOptions);

  return (
    <>
      <div className="d-flex flex-row gap-1">
        {sizeOptions.map((size, index) => (
          <SizePickerItem
            key={size}
            sizeValue={size as SizeItemValue}
            size={SizeItemSize.LARGE}
            theme="light"
            isActive={activeSize === size}
            onClick={() => handleActiveSize(size as SizeItemValue)}
          />
        ))}
      </div>
      {children}
    </>
  );
};

export default React.memo(SizePicker);
