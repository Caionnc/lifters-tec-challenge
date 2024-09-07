import React from "react";
import SearchField from "./components/SearchField";
import IconButton from "./components/IconButton";
import Typography from "../UI/Typography";
import { useNavigate } from "react-router-dom";
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
    <div className="d-flex flex-column gap-0">
      <div className={styles["top-bar-container"]}>
        <div className="d-flex align-items-center gap-3">
          <div style={{ cursor: "pointer" }} onClick={handleClick}>
            <Typography heading="h5" variant="inter" bold color="white">
              Lifter's Shop
            </Typography>
          </div>
          <Typography variant="inter">Shop</Typography>
          <Typography variant="inter">Store</Typography>
          <Typography variant="inter">About</Typography>
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
          <Typography variant="inter">Login</Typography>
        </div>
      </div>
      {children}
    </div>
  );
};

export default React.memo(TopBar);
