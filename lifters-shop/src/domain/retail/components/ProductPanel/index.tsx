import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { liftersShopProducts } from "@/utils/data";
import ProductCard from "@/components/ProductCard";
import Typography from "@/components/UI/Typography";
import { FontSize, FontWeight } from "@/components/UI/Typography/data";

interface ProductPanelProps {
  children?: React.ReactNode;
}

const ProductPanel: React.FC<ProductPanelProps> = ({ children }) => {
  return (
    <div className="d-flex flex-column gap-2 margin-top-4">
      <div className="d-flex -flex-row justify-content-between">
        <div></div>
        <Typography
          size={FontSize.XS}
          fontWeight={FontWeight.NORMAL}
          variant="publicSans"
          color="dark"
        >{`Showing 1003 Products`}</Typography>
      </div>
      <div className="d-flex flex-row flex-wrap gap-2">
        {liftersShopProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(ProductPanel);
