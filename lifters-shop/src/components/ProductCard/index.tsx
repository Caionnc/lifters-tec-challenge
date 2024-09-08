import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Product } from "@/model/product";
import Typography from "../UI/Typography";
import { FontSize, FontWeight } from "../UI/Typography/data";

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
      <img
        src={product.fotos.find((foto) => foto.capa === true)?.url || ""}
        alt="..."
        style={{
          backgroundColor: "gray",
          width: "264px",
          height: "264px",
        }}
      />
      <div className="d-flex flex-row justify-content-between">
        <Typography
          size={FontSize.SM}
          fontWeight={FontWeight.BOLD}
          variant="publicSans"
          color="dark"
        >
          {product.titulo}
        </Typography>
        <Typography
          size={FontSize.SM}
          fontWeight={FontWeight.NORMAL}
          variant="publicSans"
          color="dark"
        >
          {product.tamanhos[0]}
        </Typography>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
