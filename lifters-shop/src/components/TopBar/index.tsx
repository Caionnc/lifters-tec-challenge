import React from "react";
import SearchField from "./components/SearchField";
import IconButton from "./components/IconButton";
import Typography from "../UI/Typography";
interface TopBarProps {
  children?: React.ReactNode;
}

const TopBar: React.FC<TopBarProps> = () => {
  return (
    <div className="fixed-top d-flex flex-fill flex-row justify-content-between align-items-center m-0 px-5 py-2 bg-dark text-light">
      <div className="d-flex align-items-center gap-3">
        <Typography variant="inter" bold>
          Lifters Shop
        </Typography>
        <Typography variant="inter">Shop</Typography>
        <Typography variant="inter">Store</Typography>
        <Typography variant="inter">About</Typography>
        <SearchField />
      </div>
      <div className="d-flex gap-1 align-items-center">
        <IconButton bagLength={'3'} themeMode="light" onClick={() => console.log('open bag drawer')}>
          <i className="bi bi-handbag"></i>
        </IconButton>
        <Typography variant="inter">Login</Typography>
      </div>
    </div>
  );
};

export default React.memo(TopBar);
