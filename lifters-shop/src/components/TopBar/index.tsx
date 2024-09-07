import React from 'react';
// import { useLocation } from 'react-router-dom';

interface TopBarProps {
  children?: React.ReactNode;
}

const TopBar: React.FC<TopBarProps> = ({ children }) => {
  // const location = useLocation();

  return (
    <div>
     <p>topbar</p>
    </div>
  );
};

export default React.memo(TopBar);
