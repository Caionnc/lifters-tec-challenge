import Typography from "@/components/UI/Typography";
import React from "react";
import Filters from "./components/Filters";
import ProductPanel from "./components/ProductPanel";
import { FontSize, FontWeight } from "@/components/UI/Typography/data";
import styles from "./Retail.module.scss";

const Retail: React.FC = () => {
  Retail.displayName = "Retail";

  return (
    <div className="d-flex flex-column">
      <div className={styles["retail-container"]}>
        <Typography
          variant="publicSans"
          size={FontSize.LG}
          fontWeight={FontWeight.BOLD}
          color="white"
        >
          Shop Men's
        </Typography>
        <Typography
          variant="publicSans"
          size={FontSize.LG}
          fontWeight={FontWeight.NORMAL}
          color="white"
        >
          Revamp your style with the latest designer trends in men’s clothing or
          <br />
          achieve a perfectly curated wardrobe thanks to our line-up of timeless
          <br />
          pieces.
        </Typography>
      </div>
      <div className="d-flex flex-row gap-5 justify-content-between px-5 py-5 bg-white">
        <Filters></Filters>
        <ProductPanel></ProductPanel>
      </div>
    </div>
  );
};

export default React.memo(Retail);
