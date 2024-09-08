import React from "react";
import styles from "../../BagDropdown.module.scss";
import { Product } from "@/model/product";
import Typography from "@/components/UI/Typography";
import { FontSize, FontWeight } from "@/components/UI/Typography/data";
import SizePickerItem from "@/components/SizePickerItem";
import ColorPickerItem from "@/components/ColorPickerItem";
import { SizeItemSize, SizeItemValue } from "@/components/SizePickerItem/data";
import { ColorPickerItemSize } from "@/components/ColorPickerItem/data";

interface BagItemProps {
  children?: React.ReactNode;
  theme: "dark" | "light";
  size: "small" | "large";
  product: Product;
}

const BagItem: React.FC<BagItemProps> = ({
  children,
  theme,
  size,
  product,
}) => {
  return (
    <div
      className={`${theme === "light" ? "bg-white" : "bg-dark"} 
        ${styles["bag-dropdown-container"]} 
        ${size === "large" ? "p-0" : ""}`}
    >
      <div className={styles["bag-item-container"]}>
        <img
          src={product.fotos[0].url}
          alt="product"
          className={styles["bag-item-image"]}
          style={{
            width: size === "small" ? "58px" : "130px",
            height: size === "small" ? "58px" : "130px",
          }}
        />
        <div className="d-flex flex-column flex-fill">
          <div className={styles["bag-item-info-name-price"]}>
            <Typography
              size={size === "small" ? FontSize.LG : FontSize.LLG}
              fontWeight={
                size === "small" ? FontWeight.NORMAL : FontWeight.NORMAL
              }
              variant="publicSans"
              color={theme === "dark" ? "white" : "dark"}
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {product.titulo}
            </Typography>
            <Typography
              size={size === "small" ? FontSize.LG : FontSize.XLG}
              fontWeight={
                size === "small" ? FontWeight.NORMAL : FontWeight.BOLD
              }
              variant="publicSans"
              color={theme === "dark" ? "white" : "dark"}
            >
              {product.valor}
            </Typography>
          </div>
          <div className="d-flex flex-row flex-fill justify-content-between align-items-center">
            <div className="d-flex flex-row gap-2">
              <SizePickerItem
                key={product.tamanhos[0]}
                sizeValue={product.tamanhos[0] as SizeItemValue}
                size={
                  size === "small" ? SizeItemSize.SMALL : SizeItemSize.LARGE
                }
                theme={theme === "dark" ? "dark" : "light"}
                customBorder={
                  theme === "dark" ? "1px solid white" : "1px solid dark"
                }
              />
              <ColorPickerItem
                key={product.cores[0].nome}
                size={
                  size === "small"
                    ? ColorPickerItemSize.SMALL
                    : ColorPickerItemSize.LARGE
                }
                color={product.cores[0].codigo}
              />
            </div>
            <button className="btn bg-transparent">
              <i
                className={`bi bi-trash-fill ${
                  theme === "dark" ? "text-white" : "text-dark"
                } ${styles["bag-item-trash-icon"]}`}
              ></i>
            </button>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default React.memo(BagItem);
