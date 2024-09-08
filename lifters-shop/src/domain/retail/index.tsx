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
      <div className={styles["retail-advertisement-container"]}>
        <Typography
          variant="publicSans"
          size={FontSize.XXL}
          fontWeight={FontWeight.SEMI_BOLD}
          color="white"
        >
          Shop Men's
        </Typography>
        <Typography
          variant="publicSans"
          size={FontSize.MD}
          fontWeight={FontWeight.NORMAL}
          color="white"
        >
          Revamp your style with the latest designer trends in men’s<br />
          clothing or achieve a perfectly curated wardrobe thanks to<br />
          our line-up of timeless pieces.
        </Typography>
      </div>
      <div className={styles["retail-content-container"]}>
        <div className="d-flex flex-row gap-3 align-items-end">
          <Typography
            size={FontSize.LLG}
            fontWeight={FontWeight.SEMI_BOLD}
            variant="publicSans"
            color="dark"
          >
            Filters
          </Typography>
          <button
            className="btn btn-link p-0"
            onClick={() => console.log("clear filters callback")}
            style={{ textAlign: "right" }}
          >
            <div className="d-fle flex-column align-self-end">
              <Typography
                size={FontSize.XS}
                fontWeight={FontWeight.NORMAL}
                color="dark"
                variant="publicSans"
              >
                <u style={{ color: "#C4C4C4" }}>Clear filters</u>
              </Typography>
            </div>
          </button>
        </div>
       <div className={styles["retail-content-displayer"]}>
        <Filters></Filters>
        <ProductPanel></ProductPanel>
       </div>
      </div>
    </div>
  );
};

export default React.memo(Retail);
