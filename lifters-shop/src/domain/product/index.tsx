import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { liftersShopProducts } from "@/utils/data";
import { ImageAlbum } from "./data";
import styles from "./Product.module.scss";
import ProductManager from "./components/ProductManager";
import { Product } from "@/model/product";

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [productImages, setProductImages] = React.useState<ImageAlbum[]>([]);
  const [product, setProduct] = React.useState<Product | undefined>();

  useEffect(() => {
    const filteredProduct =
      liftersShopProducts.filter(
        (product) => product.id === Number(productId)
      )[0] || undefined;
    setProductImages(filteredProduct.fotos);
    setProduct(filteredProduct);
  }, [productId]);

  return (
    <div className={styles["product-container"]}>
      <div className="d-flex flex-column gap-2">
        <div className="d-flex flex-row gap-1">
          {productImages.slice(0, 2).map((image, index) => (
            <img
              src={image.url}
              className="img-fluid"
              alt={`product-image-${index}`}
              style={{ width: "277px", height: "277px" }}
            />
          ))}
        </div>
        <div className="d-flex flex-row gap-1">
          {productImages.slice(2, 4).map((image, index) => (
            <img
              src={image.url}
              className="img-fluid"
              alt={`product-image-${index}`}
              style={{ width: "277px", height: "277px" }}
            />
          ))}
        </div>
      </div>
      {product && <ProductManager product={product} />}
    </div>
  );
};

export default ProductPage;
