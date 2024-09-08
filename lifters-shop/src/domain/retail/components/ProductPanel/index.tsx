import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "@/components/ProductCard";
import Typography from "@/components/UI/Typography";
import { FontSize, FontWeight } from "@/components/UI/Typography/data";
import { Product } from "@/model/product";

interface ProductPanelProps {
  children?: React.ReactNode;
  products: Product[];
}

const ProductPanel: React.FC<ProductPanelProps> = ({ children, products }) => {
  return (
    <div className="d-flex flex-column gap-2 mt-4">
      <div className="d-flex flex-row justify-content-between">
        <div></div>
        <Typography
          size={FontSize.XS}
          fontWeight={FontWeight.NORMAL}
          variant="publicSans"
          color="dark"
        >
          {`Showing ${products.length} Products`}
        </Typography>
      </div>
      <div className="d-flex flex-row flex-wrap gap-2">
        {products &&
          products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default React.memo(ProductPanel);
