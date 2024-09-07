import React from 'react';
// import { useLocation } from 'react-router-dom';

interface SearchFieldProps {
  children?: React.ReactNode;
}

const SearchField: React.FC<SearchFieldProps> = ({ children }) => {
  // const location = useLocation();

  return (
    <div>
     <p>topbar</p>
    </div>
  );
};

export default React.memo(SearchField);
