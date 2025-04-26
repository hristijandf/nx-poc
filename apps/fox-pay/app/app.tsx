import { Calculator } from './components/Calculator';

// We're defining the calculateSum function directly in the App component
// to avoid import issues with the api-interfaces package
async function calculateSum(a: number, b: number): Promise<{ sum: number }> {
  try {
    const response = await fetch('http://localhost:4441/api/calculate/sum', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ a, b }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Failed to calculate sum:', error);
    throw error;
  }
}

export function App() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">NX Calculator App</h1>
      <Calculator onCalculate={calculateSum} />
    </div>
  );
}

export default App;
