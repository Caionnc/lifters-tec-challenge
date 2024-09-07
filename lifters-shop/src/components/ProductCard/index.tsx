import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Product } from "@/model/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      className="d-flex flex-column gap-1"
      style={{ cursor: "pointer" }}
      onClick={handleProductClick}
    >
      <img src={"..."} className="img-thumbnail" alt="..." />
      <div className="d-flex flex-row justify-content-between">
        {product.titulo}
        {product.tamanhos[0]}
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
