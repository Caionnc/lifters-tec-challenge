import React from "react";
import SearchField from "./components/SearchField";
import Typography from "../UI/Typography";
import { useNavigate } from "react-router-dom";
import { FontSize, FontWeight } from "../UI/Typography/data";
import styles from "./TopBar.module.scss";
import BagDropdown from "../BagDropdown";

interface TopBarProps {
  children?: React.ReactNode;
}

const TopBar: React.FC<TopBarProps> = ({ children }) => {
  const navigate = useNavigate();
  const [openBagDropdown, setOpenBagDropdown] = React.useState(false);

  const handleOpenBagDropdown = React.useCallback(() => {
    setOpenBagDropdown((prevState) => !prevState);
  }, []);

  const handleNavHome = () => {
    navigate(`/`);
  };

  return (
    <div className="d-flex flex-column">
      {/* Overlay that appears when the dropdown is open */}
      {openBagDropdown && <div className={styles["overlay"]}></div>}
      <div className={styles["top-bar-container"]}>
        <div className="d-flex align-items-center gap-3">
          <div style={{ cursor: "pointer" }} onClick={handleNavHome}>
            <Typography
              size={FontSize.LG}
              variant="inter"
              fontWeight={FontWeight.SEMI_BOLD}
              color="white"
            >
              Lifter's Shop
            </Typography>
          </div>
          <Typography
            size={FontSize.SM}
            variant="inter"
            fontWeight={FontWeight.NORMAL}
          >
            Shop
          </Typography>
          <Typography
            size={FontSize.SM}
            variant="inter"
            fontWeight={FontWeight.NORMAL}
          >
            Store
          </Typography>
          <Typography
            size={FontSize.SM}
            variant="inter"
            fontWeight={FontWeight.NORMAL}
          >
            About
          </Typography>
          <SearchField />
        </div>
        <div className="d-flex gap-1 align-items-center">
          <BagDropdown
            open={openBagDropdown}
            onClick={handleOpenBagDropdown}
            bagLength={3}
          />
          <Typography
            size={FontSize.SM}
            variant="inter"
            fontWeight={FontWeight.NORMAL}
          >
            Login
          </Typography>
        </div>
      </div>
      {children}
    </div>
  );
};

export default React.memo(TopBar);
