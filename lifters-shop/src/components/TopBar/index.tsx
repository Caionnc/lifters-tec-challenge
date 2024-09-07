import React from "react";
import SearchField from "./components/SearchField";
import IconButton from "./components/IconButton";
import Typography from "../UI/Typography";
interface TopBarProps {
  children?: React.ReactNode;
}

const TopBar: React.FC<TopBarProps> = ({ children }) => {

  return (
    <div className="fixed-top d-flex flex-fill flex-row w-100 justify-content-between m-0 px-5 py-5">
      <div className="d-flex gap-2">
        <Typography variant="inter" bold>
          Lifters Shop
        </Typography>
        <Typography variant="inter">Shop</Typography>
        <Typography variant="inter">Store</Typography>
        <Typography variant="inter">About</Typography>
        <SearchField />
      </div>
      <div className="d-flex gap-1">
        <Typography variant="inter">Login</Typography>
        <IconButton />
      </div>
    </div>
  );
};

export default React.memo(TopBar);
