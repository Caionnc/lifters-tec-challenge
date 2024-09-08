import React from "react";
import styles from "./BagDropdown.module.scss";
import { useNavigate } from "react-router-dom";
import BagItem from "./component/BagItem";
import { liftersShopProducts } from "@/utils/data";
import Typography from "../UI/Typography";
import { FontSize, FontWeight } from "../UI/Typography/data";

interface BagDropdownProps {
  children?: React.ReactNode;
  open: boolean;
  bagLength: number;
  onClick: () => void;
}

const BagDropdown: React.FC<BagDropdownProps> = ({
  children,
  open,
  bagLength,
  onClick,
}) => {
  const navigate = useNavigate();
  const product = liftersShopProducts[0];

  const handleNavCheckout = () => {
    navigate(`/checkout`);
  };

  return (
    <div className="dropdown bg-dark text-white">
      <button
        className="btn bg-dark text-white"
        type="button"
        data-bs-toggle="dropdown"
        data-bs-auto-close="false"
        aria-expanded="false"
        onClick={onClick}
      >
        <div className="d-flex flex-row gap-1">
          <i className="bi bi-handbag"></i>
          {bagLength}
        </div>
      </button>
      <>
        <ul className="dropdown-menu">
          <BagItem theme="dark" size="small" product={product} />
          <div className={styles["bag-item-checkout"]}>
            <div className={styles['bag-divider']} />
            <div className="d-flex flex-row w-100 justify-content-between">
              <Typography
                size={FontSize.XLG}
                variant="publicSans"
                fontWeight={FontWeight.NORMAL}
                color="white"
              >
                Total
              </Typography>
              <Typography
                size={FontSize.XLG}
                variant="publicSans"
                fontWeight={FontWeight.BOLD}
                color="white"
              >
                $999.99
              </Typography>
            </div>
            <button
              className={`btn btn-secondary w-100 rounded-0 text-dark`}
              onClick={() => handleNavCheckout()}
            >
              <Typography
                size={FontSize.SSM}
                fontWeight={FontWeight.SEMI_BOLD}
                variant="publicSans"
                color="dark"
              >
                Checkout
              </Typography>
            </button>
          </div>
        </ul>
      </>
    </div>
  );
};

export default React.memo(BagDropdown);
