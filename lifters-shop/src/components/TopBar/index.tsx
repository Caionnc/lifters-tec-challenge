import React from "react";
import SearchField from "./components/SearchField";
import IconButton from "./components/IconButton";
import Typography from "../UI/Typography";
import { useNavigate } from "react-router-dom";
import { FontSize, FontWeight } from "../UI/Typography/data";
import styles from "./TopBar.module.scss";
interface TopBarProps {
  children?: React.ReactNode;
}

const TopBar: React.FC<TopBarProps> = ({ children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/`);
  };
  return (
    <div className="d-flex flex-column">
      <div className={styles["top-bar-container"]}>
        <div className="d-flex align-items-center gap-3">
          <div style={{ cursor: "pointer" }} onClick={handleClick}>
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
          <IconButton
            bagLength={"3"}
            themeMode="light"
            onClick={() => console.log("open bag drawer")}
          >
            <i className="bi bi-handbag"></i>
          </IconButton>
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
