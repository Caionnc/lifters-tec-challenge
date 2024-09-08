import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "@/components/ProductCard";
import Typography from "@/components/UI/Typography";
import { FontSize, FontWeight } from "@/components/UI/Typography/data";
import { Product } from "@/model/product";
import { LifterShopContext } from "@/context/shop";

interface ProductPanelProps {
  children?: React.ReactNode;
  products: Product[];
}

const ProductPanel: React.FC<ProductPanelProps> = ({ children, products }) => {
  const { productFilters } = useContext(LifterShopContext);
  const productsWithFilters = products.filter(
    (product) =>
      (productFilters.category === "" ||
        product.categoria === productFilters.category) &&
      (productFilters.color === "" ||
        product.cores.map((p) => p.codigo).indexOf(productFilters.color) !== -1)
  );

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
          {`Showing ${productsWithFilters.length} Products`}
        </Typography>
      </div>
      <div className="d-flex flex-row flex-wrap gap-2">
        {productsWithFilters.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(ProductPanel);
