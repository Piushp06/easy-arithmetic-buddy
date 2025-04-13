
import React from 'react';
import { cn } from '../lib/utils';

interface CalculatorButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

const CalculatorButton: React.FC<CalculatorButtonProps> = ({ 
  children, 
  onClick, 
  className 
}) => {
  return (
    <button
      className={cn(
        'calculator-button h-16 w-full', 
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CalculatorButton;
