import Typography from "@/components/UI/Typography";
import { FontSize, FontWeight } from "@/components/UI/Typography/data";
import React from "react";

interface IconButtonProps {
  children?: React.ReactNode;
  bagLength: string;
  themeMode: "light" | "dark";
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  children,
  bagLength,
  themeMode,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`btn-${themeMode} bg-transparent text-light border-0`}
    >
      <div className="d-flex flex-row gap-1 align-items-center">
        {children}
        <Typography
          size={FontSize.SM}
          fontWeight={FontWeight.NORMAL}
          variant="inter"
        >
          {bagLength}
        </Typography>
      </div>
    </button>
  );
};

export default React.memo(IconButton);
