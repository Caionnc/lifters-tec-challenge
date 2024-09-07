import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

type Variant = 'inter' | 'publicSans';

interface TypographyProps {
  children?: React.ReactNode;
  variant?: Variant;
  bold?: boolean;
}

const Typography: React.FC<TypographyProps> = ({ children, variant = 'inter', bold = false }) => {
  const fontClass = variant === 'publicSans' ? 'font-public-sans' : 'font-inter';
  const fontWeight = bold ? 'fw-bold' : 'fw-normal';

  return (
    <p className={`mb-0 ${fontClass} ${fontWeight}`}>
      {children}
    </p>
  );
};

export default React.memo(Typography);
