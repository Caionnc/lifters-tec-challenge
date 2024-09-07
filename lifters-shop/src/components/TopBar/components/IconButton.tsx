import React from 'react';

interface IconButtonProps {
  children?: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({ children }) => {

  return (
    <div>
     <p>Icon 3</p>
    </div>
  );
};

export default React.memo(IconButton);
