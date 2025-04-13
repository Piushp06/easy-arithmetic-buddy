
export const performCalculation = (
  firstOperand: number,
  secondOperand: number,
  operator: string
): number => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '×':
      return firstOperand * secondOperand;
    case '÷':
      return secondOperand !== 0 
        ? firstOperand / secondOperand 
        : Number.POSITIVE_INFINITY; // Handle division by zero
    default:
      return secondOperand;
  }
};
