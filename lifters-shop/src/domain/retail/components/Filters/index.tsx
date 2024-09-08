import React, { useCallback, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Typography from "@/components/UI/Typography";
import ColorPicker from "../ColorPicker";
import { ColorPickerItemSize } from "@/components/ColorPickerItem/data";
import { FontSize, FontWeight } from "@/components/UI/Typography/data";
import { liftersShopProducts } from "@/utils/data";
import { LifterShopContext } from "@/context/shop";

interface FiltersProps {
  children?: React.ReactNode;
}

const Filters: React.FC<FiltersProps> = ({ children }) => {
  const { productFilters, setProductFilters } = useContext(LifterShopContext);

  const defaultCategories = [
    "Jackets",
    "Fleece",
    "Sweatshirts & Hoodies",
    "Sweaters",
    "Shirts",
    "T-Shirts",
    "Pants & Jeans",
  ];
  const categories = new Set([
    ...defaultCategories,
    ...liftersShopProducts.map((product) => product.categoria),
  ]);

  const handleActiveColorOption = useCallback(
    (color: string) => {
      setProductFilters({ ...productFilters, color });
    },
    [productFilters]
  );

  const handleActiveCategoryOption = useCallback(
    (category: string) => {
      setProductFilters({ ...productFilters, category });
    },
    [productFilters]
  );

  return (
    <div className="d-flex flex-column gap-3">
      <div className="d-flex flex-column gap-3">
        <Typography
          size={FontSize.XS}
          fontWeight={FontWeight.BOLD}
          color="dark"
        >
          Categories
        </Typography>
        <div className="d-flex flex-column gap-2">
          {Array.from(categories).map((category) => (
            <div key={category} className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={productFilters.category === category}
                onChange={() => handleActiveCategoryOption(category)}
                id={`${category}Check`}
              />
              <label className="form-check-label" htmlFor={`${category}Check`}>
                <Typography
                  size={FontSize.XS}
                  variant="publicSans"
                  fontWeight={FontWeight.NORMAL}
                  color="dark"
                >
                  {category}
                </Typography>
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex flex-column gap-3">
        <Typography
          size={FontSize.XS}
          fontWeight={FontWeight.BOLD}
          color="dark"
        >
          Color
        </Typography>
        <ColorPicker
          activeColor={productFilters.color}
          size={ColorPickerItemSize.SEMI_MEDIUM}
          setActiveColorOption={handleActiveColorOption}
        />
      </div>
    </div>
  );
};

export default React.memo(Filters);
