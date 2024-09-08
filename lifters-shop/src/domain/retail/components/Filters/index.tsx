import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Typography from "@/components/UI/Typography";
import ColorPicker from "../ColorPicker";
import { ColorPickerItemSize } from "@/components/ColorPickerItem/data";
import { FontSize, FontWeight } from "@/components/UI/Typography/data";

interface FiltersProps {
  children?: React.ReactNode;
}

const Filters: React.FC<FiltersProps> = ({ children }) => {
  const [, setActiveColorOption] = React.useState<string | "">("");
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
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="jacketsCheck"
            />
            <label className="form-check-label" htmlFor="jacketsCheck">
              <Typography
                size={FontSize.XS}
                variant="publicSans"
                fontWeight={FontWeight.NORMAL}
                color="dark"
              >
                Jackets
              </Typography>
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="fleeceCheck"
            />
            <label className="form-check-label" htmlFor="fleeceCheck">
              <Typography
                size={FontSize.XS}
                variant="publicSans"
                fontWeight={FontWeight.NORMAL}
                color="dark"
              >
                Fleece
              </Typography>
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="sweatshirtsCheck"
            />
            <label className="form-check-label" htmlFor="sweatshirtsCheck">
              <Typography
                size={FontSize.XS}
                variant="publicSans"
                fontWeight={FontWeight.NORMAL}
                color="dark"
              >
                Sweatshirts & Hoodies
              </Typography>
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="sweatersCheck"
            />
            <label className="form-check-label" htmlFor="sweatersCheck">
              <Typography
                size={FontSize.XS}
                variant="publicSans"
                fontWeight={FontWeight.NORMAL}
                color="dark"
              >
                Sweaters
              </Typography>
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="shirtsCheck"
            />
            <label className="form-check-label" htmlFor="shirtsCheck">
              <Typography
                size={FontSize.XS}
                variant="publicSans"
                fontWeight={FontWeight.NORMAL}
                color="dark"
              >
                Shirts
              </Typography>
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="tShirtsCheck"
            />
            <label className="form-check-label" htmlFor="tShirtsCheck">
              <Typography
                size={FontSize.XS}
                variant="publicSans"
                fontWeight={FontWeight.NORMAL}
                color="dark"
              >
                T-Shirts
              </Typography>
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="pantsAndJeansCheck"
            />
            <label className="form-check-label" htmlFor="pantsAndJeansCheck">
              <Typography
                size={FontSize.XS}
                variant="publicSans"
                fontWeight={FontWeight.NORMAL}
                color="dark"
              >
                Pants & Jeans
              </Typography>
            </label>
          </div>
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
          size={ColorPickerItemSize.SEMI_MEDIUM}
          setActiveColorOption={setActiveColorOption}
        />
      </div>
    </div>
  );
};

export default React.memo(Filters);
