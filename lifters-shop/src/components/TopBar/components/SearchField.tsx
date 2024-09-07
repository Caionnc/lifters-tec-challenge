import React from "react";

const SearchField: React.FC = () => {
  return (
    <div className="d-flex flex-row gap-2">
      <i className="bi bi-search"></i> 
      <input className='bg-transparent border-0' type="text" placeholder="Search"/>
    </div>
  );
};

export default React.memo(SearchField);
