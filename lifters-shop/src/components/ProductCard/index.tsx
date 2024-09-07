import React from 'react';

interface ProductCardProps {
  product: any;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div>
      <p>Product Card</p>
    </div>
  );
};

export default ProductCard;
