import type { SumRequest, SumResponse } from 'api-interfaces';

const API_URL = 'http://localhost:4441/api';

/**
 * Calculates the sum of two numbers by calling the backend API
 */
export async function calculateSum(a: number, b: number): Promise<SumResponse> {
  const request: SumRequest = { a, b };

  try {
    const response = await fetch(`${API_URL}/calculate/sum`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
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
