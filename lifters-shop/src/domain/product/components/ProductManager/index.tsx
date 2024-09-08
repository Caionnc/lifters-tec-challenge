import { ProductColor, Product } from "@/model/product";
import React, { useCallback, useContext } from "react";
import styles from "../../Product.module.scss";
import Typography from "@/components/UI/Typography";
import { FontSize, FontWeight } from "@/components/UI/Typography/data";
import ColorPicker from "@/domain/retail/components/ColorPicker";
import { ColorPickerItemSize } from "@/components/ColorPickerItem/data";
import SizePicker from "../SizePicker";
import { SizeItemSize, SizeItemValue } from "@/components/SizePickerItem/data";
import { useNavigate } from "react-router-dom";
import { LifterShopContext } from "@/context/shop";
import { v4 as uuidv4 } from "uuid";
import { enqueueSnackbar } from "notistack";
import { extractNumberFromPrice } from "@/utils/getPrice";
interface ProductManagerProps {
  product: Product;
}

const ProductManager: React.FC<ProductManagerProps> = ({ product }) => {
  const [activeSizeOption, setActiveSizeOption] = React.useState<
    SizeItemValue | ""
  >("");
  const [activeColorOption, setActiveColorOption] = React.useState<string>("");
  const navigate = useNavigate();
  const { addToCart } = useContext(LifterShopContext);

  const handleNavHome = () => {
    navigate(`/`);
  };

  const colorSanitizer = useCallback(
    (colors: ProductColor[]): ProductColor[] => {
      return colors.map((color) => {
        switch (color.nome) {
          case "preto":
            return { nome: "black", codigo: "#0D0D0D" };
          case "vermelho":
            return { nome: "red", codigo: "#EB5757" };
          case "azul":
            return { nome: "blue", codigo: "#2F80ED" };
          default:
            return { nome: color.nome, codigo: color.codigo };
        }
      });
    },
    []
  );

  const handleSetActiveColorOption = useCallback((color: string) => {
    setActiveColorOption(color);
  }, []);

  const handleSetActiveSizeOption = useCallback((size: SizeItemValue) => {
    setActiveSizeOption(size);
  }, []);

  const handleAddToBag = useCallback(() => {
    console.log("add to bag product", product.id);
    addToCart({
      id: uuidv4(),
      name: product.titulo,
      color: activeColorOption,
      size: activeSizeOption,
      price: extractNumberFromPrice(product.valor).toString(),
      image: product.fotos.find((foto) => foto.capa === true)?.url || "",
    });
  }, [activeColorOption, activeSizeOption, product]);

  return (
    <div className={styles["product-manager-container"]}>
      <div className="d-flex flex-column gap-2">
        <div className={styles["product-manager-title-container"]}>
          <Typography
            size={FontSize.XXL}
            fontWeight={FontWeight.SEMI_BOLD}
            variant="publicSans"
          >
            {product.titulo}
          </Typography>
          <Typography
            size={FontSize.MD}
            fontWeight={FontWeight.NORMAL}
            variant="publicSans"
          >
            {product.valor}
          </Typography>
          <div className={styles["product-manager-description"]}>
            <Typography
              size={FontSize.MD}
              fontWeight={FontWeight.NORMAL}
              variant="publicSans"
            >
              {product.descricao}
            </Typography>
          </div>
        </div>
        <div className={styles["product-manager-color"]}>
          <Typography
            size={FontSize.MD}
            fontWeight={FontWeight.NORMAL}
            variant="publicSans"
            color="secondary"
          >
            Color
          </Typography>
          <ColorPicker
            size={ColorPickerItemSize.LARGE}
            colors={colorSanitizer(product.cores)}
            setActiveColorOption={handleSetActiveColorOption}
          />
        </div>
        <div className={styles["product-manager-size"]}>
          <Typography
            size={FontSize.MD}
            fontWeight={FontWeight.NORMAL}
            variant="publicSans"
            color="secondary"
          >
            Size
          </Typography>
          <SizePicker
            size={SizeItemSize.LARGE}
            sizes={product.tamanhos}
            setActiveSizeOption={handleSetActiveSizeOption}
          />
        </div>
      </div>
      <div className={styles["product-manager-buttons-container"]}>
        <button
          className={`btn bg-dark rounded-0 text-white ${styles["product-manager-add-btn"]}`}
          type="button"
          onClick={() => {
            if (activeColorOption === "" || activeSizeOption === "") {
              enqueueSnackbar("Please select a color and a size", {
                variant: "error",
              });
              return;
            } else {
              handleAddToBag();
              enqueueSnackbar("Product added to your bag", {
                variant: "success",
              });
              console.log("added to bag:", product.titulo);
            }
          }}
        >
          <div className="d-flex flex-row gap-2 justify-content-center align-items-center">
            <i className="bi bi-handbag"></i>
            <Typography
              size={FontSize.SSM}
              fontWeight={FontWeight.SEMI_BOLD}
              variant="publicSans"
              color="white"
            >
              Add to bag
            </Typography>
          </div>
        </button>
        <button
          className={`btn btn-secondary rounded-0 text-white ${styles["product-manager-back-btn"]}`}
          onClick={() => handleNavHome()}
        >
          <Typography
            size={FontSize.SSM}
            fontWeight={FontWeight.SEMI_BOLD}
            variant="publicSans"
            color="dark"
          >
            Back
          </Typography>
        </button>
      </div>
    </div>
  );
};

export default React.memo(ProductManager);
