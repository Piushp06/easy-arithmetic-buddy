
import React from 'react';

interface DisplayProps {
  input: string;
  result: string;
}

const Display: React.FC<DisplayProps> = ({ input, result }) => {
  return (
    <div className="bg-transparent p-4 flex flex-col items-end">
      <div className="text-gray-600 text-right h-6 mb-1 min-h-6 overflow-x-auto whitespace-nowrap">
        {result}
      </div>
      <div className="text-4xl font-semibold text-right overflow-x-auto whitespace-nowrap">
        {input}
      </div>
    </div>
  );
};

export default Display;
