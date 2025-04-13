
import React, { useState } from 'react';
import Display from './Display';
import CalculatorButton from './CalculatorButton';
import { performCalculation } from '../utils/calculatorUtils';
import { Divide, X, Minus, Plus, Equal } from 'lucide-react';

const Calculator = () => {
  const [input, setInput] = useState('0');
  const [result, setResult] = useState('');
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [storedOperator, setStoredOperator] = useState('');
  const [storedValue, setStoredValue] = useState<number | null>(null);

  const clearAll = () => {
    setInput('0');
    setResult('');
    setWaitingForOperand(false);
    setStoredOperator('');
    setStoredValue(null);
  };

  const deleteLastChar = () => {
    if (input.length > 1) {
      setInput(input.slice(0, -1));
    } else {
      setInput('0');
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setInput('0.');
      setWaitingForOperand(false);
    } else if (input.indexOf('.') === -1) {
      setInput(input + '.');
    }
  };

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setInput(digit);
      setWaitingForOperand(false);
    } else {
      setInput(input === '0' ? digit : input + digit);
    }
  };

  const inputPercent = () => {
    const currentValue = parseFloat(input);
    setInput((currentValue / 100).toString());
  };

  const inputSign = () => {
    const currentValue = parseFloat(input);
    setInput((currentValue * -1).toString());
  };

  const performOperation = (operator: string) => {
    const inputValue = parseFloat(input);
    
    if (storedValue === null) {
      setStoredValue(inputValue);
      setResult(`${inputValue} ${operator}`);
    } else if (storedOperator) {
      const newResult = performCalculation(storedValue, inputValue, storedOperator);
      setStoredValue(newResult);
      setResult(`${newResult} ${operator}`);
      setInput(newResult.toString());
    }
    
    setWaitingForOperand(true);
    setStoredOperator(operator);
  };

  const calculateResult = () => {
    if (storedOperator && storedValue !== null) {
      const inputValue = parseFloat(input);
      const newResult = performCalculation(storedValue, inputValue, storedOperator);
      
      setResult(`${storedValue} ${storedOperator} ${inputValue} =`);
      setInput(newResult.toString());
      setStoredValue(null);
      setStoredOperator('');
      setWaitingForOperand(true);
    }
  };

  return (
    <div className="calculator-container p-4">
      <Display input={input} result={result} />
      
      <div className="grid grid-cols-4 gap-3 mt-4">
        {/* First row */}
        <CalculatorButton 
          onClick={clearAll}
          className="control-button"
        >
          AC
        </CalculatorButton>
        <CalculatorButton 
          onClick={inputSign}
          className="control-button"
        >
          +/-
        </CalculatorButton>
        <CalculatorButton 
          onClick={inputPercent}
          className="control-button"
        >
          %
        </CalculatorButton>
        <CalculatorButton 
          onClick={() => performOperation('÷')}
          className="operation-button"
        >
          <Divide size={20} />
        </CalculatorButton>
        
        {/* Second row */}
        <CalculatorButton 
          onClick={() => inputDigit('7')}
          className="number-button"
        >
          7
        </CalculatorButton>
        <CalculatorButton 
          onClick={() => inputDigit('8')}
          className="number-button"
        >
          8
        </CalculatorButton>
        <CalculatorButton 
          onClick={() => inputDigit('9')}
          className="number-button"
        >
          9
        </CalculatorButton>
        <CalculatorButton 
          onClick={() => performOperation('×')}
          className="operation-button"
        >
          <X size={20} />
        </CalculatorButton>
        
        {/* Third row */}
        <CalculatorButton 
          onClick={() => inputDigit('4')}
          className="number-button"
        >
          4
        </CalculatorButton>
        <CalculatorButton 
          onClick={() => inputDigit('5')}
          className="number-button"
        >
          5
        </CalculatorButton>
        <CalculatorButton 
          onClick={() => inputDigit('6')}
          className="number-button"
        >
          6
        </CalculatorButton>
        <CalculatorButton 
          onClick={() => performOperation('-')}
          className="operation-button"
        >
          <Minus size={20} />
        </CalculatorButton>
        
        {/* Fourth row */}
        <CalculatorButton 
          onClick={() => inputDigit('1')}
          className="number-button"
        >
          1
        </CalculatorButton>
        <CalculatorButton 
          onClick={() => inputDigit('2')}
          className="number-button"
        >
          2
        </CalculatorButton>
        <CalculatorButton 
          onClick={() => inputDigit('3')}
          className="number-button"
        >
          3
        </CalculatorButton>
        <CalculatorButton 
          onClick={() => performOperation('+')}
          className="operation-button"
        >
          <Plus size={20} />
        </CalculatorButton>
        
        {/* Fifth row */}
        <CalculatorButton 
          onClick={() => inputDigit('0')}
          className="number-button col-span-2"
        >
          0
        </CalculatorButton>
        <CalculatorButton 
          onClick={inputDecimal}
          className="number-button"
        >
          .
        </CalculatorButton>
        <CalculatorButton 
          onClick={calculateResult}
          className="equal-button"
        >
          <Equal size={20} />
        </CalculatorButton>
      </div>
    </div>
  );
};

export default Calculator;
