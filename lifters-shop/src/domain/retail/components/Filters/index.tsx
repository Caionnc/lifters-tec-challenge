import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Typography from "@/components/UI/Typography";
import ColorPicker from "../ColorPicker";
import { ColorPickerItemSize } from "@/components/ColorPickerItem/data";

interface FiltersProps {
  children?: React.ReactNode;
}

const Filters: React.FC<FiltersProps> = ({ children }) => {
  return (
    <div className="d-flex flex-column gap-3">
      <div className="d-flex flex-row gap-3 align-items-end">
        <Typography heading="h4" variant="publicSans" color="dark" bold>
          Filters
        </Typography>
        <button
          className="btn btn-link p-0"
          onClick={() => console.log("clear filters callback")}
          style={{ textAlign: "right" }}
        >
          <div className="d-fle flex-column align-self-end">
            <Typography color="dark" variant="publicSans">
              <u style={{ color: "#C4C4C4" }}>Clear filters</u>
            </Typography>
          </div>
        </button>
      </div>
      <div className="d-flex flex-column gap-3">
        <Typography color="dark" bold>
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
              Jackets
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
              Fleece
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
              Sweatshirts & Hoodies
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
              Sweaters
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
              Shirts
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
              T-Shirts
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
              Pants & Jeans
            </label>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column gap-3">
        <Typography color="dark" bold>
          Color
        </Typography>
        <ColorPicker size={ColorPickerItemSize.Large}></ColorPicker>
      </div>
    </div>
  );
};

export default React.memo(Filters);
