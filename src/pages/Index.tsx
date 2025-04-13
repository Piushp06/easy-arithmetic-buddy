
import Calculator from '../components/Calculator';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-center text-3xl font-bold text-white mb-6 drop-shadow-lg">
          Simple Calculator
        </h1>
        <Calculator />
      </div>
    </div>
  );
};

export default Index;
