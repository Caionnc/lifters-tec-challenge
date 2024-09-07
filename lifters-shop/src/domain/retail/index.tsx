import Typography from "@/components/UI/Typography";
import React from "react";
import Filters from "./components/Filters";

const Retail: React.FC = () => {
  Retail.displayName = "Retail";

  return (
    <div className="d-flex flex-column">
      <div className="d-flex w-100 flex-column gap-2 px-5 py-5 border-top border-secondary bg-dark">
        <Typography variant="publicSans" heading="h1" bold color="white">
          Shop Men's
        </Typography>
        <Typography variant="publicSans" color="white">
          Revamp your style with the latest designer trends in men’s clothing or
          <br />
          achieve a perfectly curated wardrobe thanks to our line-up of timeless
          <br />
          pieces.
        </Typography>
      </div>
      <div className="d-flex flex-row gap-5 px-5 py-5 bg-white">
        <Filters></Filters>
        <div>ProductPanel Component</div>
      </div>
    </div>
  );
};

export default React.memo(Retail);
