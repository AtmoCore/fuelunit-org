'use client';

import { useState } from 'react';

export default function CalculatorPage() {
  const [income, setIncome] = useState('');
  const [fuCost, setFuCost] = useState('');
  const [afu, setAfu] = useState('1.0');
  const [score, setScore] = useState<null | number>(null);
  const [coverage, setCoverage] = useState<null | number>(null);

  const calculate = () => {
    const incomeVal = parseFloat(income);
    const fuCostVal = parseFloat(fuCost);
    const afuVal = parseFloat(afu);

    if (isNaN(incomeVal) || isNaN(fuCostVal) || isNaN(afuVal) || fuCostVal <= 0 || afuVal <= 0) {
      alert('Please enter valid numbers.');
      return;
    }

    const scoreResult = incomeVal / (afuVal * fuCostVal);
    const dailyCoverage = (incomeVal / fuCostVal / afuVal) * 100;

    setScore(scoreResult);
    setCoverage(dailyCoverage);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">Calculate Your FU Score</h1>

      <div className="w-full max-w-md space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Daily income (in €):</label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
            placeholder="e.g. 15"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Local cost of 1 sFU (in €):</label>
          <input
            type="number"
            value={fuCost}
            onChange={(e) => setFuCost(e.target.value)}
            className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
            placeholder="e.g. 5.00"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Your daily requirement (aFU):</label>
          <input
            type="number"
            value={afu}
            onChange={(e) => setAfu(e.target.value)}
            className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
            placeholder="e.g. 1.0"
          />
        </div>

        <button
          onClick={calculate}
          className="w-full bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-200"
        >
          Calculate FU Score
        </button>

        {score !== null && (
          <div className="mt-6 space-y-2 bg-gray-900 p-4 rounded">
            <p>
              <strong>Your FU Score:</strong> {score.toFixed(2)} days
            </p>
            <p>
              <strong>Daily coverage:</strong> {coverage!.toFixed(1)}%
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
