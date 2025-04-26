import { useState } from 'react';

interface CalculatorProps {
  onCalculate: (a: number, b: number) => Promise<{ sum: number }>;
}

export function Calculator({ onCalculate }: CalculatorProps) {
  const [a, setA] = useState<string>('');
  const [b, setB] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset states
    setResult(null);
    setError(null);
    setIsLoading(true);

    try {
      // Convert input strings to numbers
      const numA = Number(a);
      const numB = Number(b);

      // Validate inputs
      if (isNaN(numA) || isNaN(numB)) {
        throw new Error('Please enter valid numbers');
      }

      // Call the calculation function
      const response = await onCalculate(numA, numB);
      setResult(response.sum);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Calculator</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="a"
            className="block text-sm font-medium text-gray-700"
          >
            First Number (A)
          </label>
          <input
            id="a"
            type="number"
            value={a}
            onChange={(e) => setA(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="b"
            className="block text-sm font-medium text-gray-700"
          >
            Second Number (B)
          </label>
          <input
            id="b"
            type="number"
            value={b}
            onChange={(e) => setB(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-300"
        >
          {isLoading ? 'Calculating...' : 'Calculate Sum'}
        </button>
      </form>

      {result !== null && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md">
          <p className="text-lg font-semibold">
            Result: <span className="text-green-600">{result}</span>
          </p>
        </div>
      )}

      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-600">{error}</p>
        </div>
      )}
    </div>
  );
}
