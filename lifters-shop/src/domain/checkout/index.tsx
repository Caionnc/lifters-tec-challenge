import React from "react";
import styles from "./Checkout.module.scss";
import Typography from "@/components/UI/Typography";
import { FontSize, FontWeight } from "@/components/UI/Typography/data";
import { useNavigate } from "react-router-dom";
import BagItem from "@/components/BagDropdown/component/BagItem";
import { liftersShopProducts } from "@/utils/data";
import CreateOrderForm from "./components/FormCreateOrder/CreateOrderForm";

const Checkout: React.FC = () => {
  const product = liftersShopProducts[0];
  const navigate = useNavigate();

  const handleNavHome = () => {
    navigate(`/`);
  };
  return (
    <div className={styles["checkout-container"]}>
      {/* Your Bag */}
      <div className="d-flex flex-row justify-content-between align-items-center">
        <div className="d-flex flex-row gap-2 align-items-center">
          <i className="bi bi-handbag" style={{ fontSize: "47px" }}></i>
          <Typography
            size={FontSize.XXL}
            variant="publicSans"
            fontWeight={FontWeight.SEMI_BOLD}
            color="dark"
          >
            Your bag
          </Typography>
        </div>
        <button
          className={`btn btn-secondary rounded-0 ${styles["checkout-back-btn"]}`}
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
      {/* Products items */}
      <div className="d-flex flex-row justify-content-between gap-5">
        <div className="d-flex flex-column justify-content-between gap-3">
          <div className={styles["checkout-products-container"]}>
            {/* Map de items */}
            <BagItem theme="light" size="large" product={product} />
            <BagItem theme="light" size="large" product={product} />
            <BagItem theme="light" size="large" product={product} />
          </div>
          {/* Security Policy */}
          <div className="d-flex flex-column">
            <div className="d-flex flex-row align-items-center gap-2">
              <i className="bi bi-handbag" style={{ fontSize: "24px" }}></i>
              <Typography
                size={FontSize.LG}
                fontWeight={FontWeight.BOLD}
                variant="publicSans"
                color="dark"
              >
                Security & Privacy
              </Typography>
            </div>
            <Typography
              size={FontSize.SSM}
              fontWeight={FontWeight.NORMAL}
              variant="publicSans"
              color="dark"
            >
              Every transaction on <b>Lifters Shop</b> is secure. Any personal
              information you give us will be <br />
              handled according to our <u>Privacy Policy</u>.
            </Typography>
          </div>
        </div>
        <CreateOrderForm></CreateOrderForm>
      </div>
    </div>
  );
};

export default React.memo(Checkout);
