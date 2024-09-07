import Typography from "@/components/UI/Typography";
import React from "react";
import { useParams } from "react-router-dom";
import ColorPicker from "../retail/components/ColorPicker";
import { ColorPickerItemSize } from "@/components/ColorPickerItem/data";

const Product: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();

  return (
    <div className="d-flex flex-row py-5 px-5">
      {/* Product Images */}
      <div className="d-flex flex-column gap-2">
        <div className="d-flex flex-row gap-2">
          <img
            src="https://via.placeholder.com/300"
            alt="product"
            className="img-thumbnail"
          />
          <img
            src="https://via.placeholder.com/300"
            alt="product"
            className="img-thumbnail"
          />
        </div>
        <div className="d-flex flex-row gap-2">
          <img
            src="https://via.placeholder.com/300"
            alt="product"
            className="img-thumbnail"
          />
          <img
            src="https://via.placeholder.com/300"
            alt="product"
            className="img-thumbnail"
          />
        </div>
      </div>
      <div className="d-flex flex-column gap-2">
        <div className="d-flex flex-column gap-1">
          <Typography heading="h4" variant="publicSans" color="dark">
            {productId}
          </Typography>
          <Typography>$99</Typography>
        </div>
        <Typography>
          Revamp your style with the latest designer<br/>
          trends in men’s clothing or achieve<br/>
          a perfectly curated wardrobe thanks to our<br/>
          line-up of timeless pieces.
        </Typography>
        <div className="d-flex flex-column gap-1">
          <Typography heading="h1" variant="publicSans" color="secondary">
            Color
          </Typography>
          <ColorPicker size={ColorPickerItemSize.Large}></ColorPicker>
        </div>

        <p>Product Description</p>
        <p>Product Price</p>
        <button>Add to Cart</button>
      </div>
      <p>Product ID: {productId}</p>
    </div>
  );
};

export default Product;
