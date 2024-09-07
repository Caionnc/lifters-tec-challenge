import React from 'react';

const Retail: React.FC = () => {
  Retail.displayName = 'Retail';

  return (
    <div>
     <p>Retail page</p>
    </div>
  );
};

export default React.memo(Retail);
