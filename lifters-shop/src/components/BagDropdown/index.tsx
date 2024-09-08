import React from "react";
import styles from "./BagDropdown.module.scss";
import { useNavigate } from "react-router-dom";
import BagItem from "./component/BagItem";
import { liftersShopProducts } from "@/utils/data";

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

  const handleNavHome = () => {
    navigate(`/`);
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
      <ul className="dropdown-menu">
        <BagItem theme="dark" size="small" product={product}/>
      </ul>
    </div>
  );
};

export default React.memo(BagDropdown);
