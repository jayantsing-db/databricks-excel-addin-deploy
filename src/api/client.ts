/**
 * API client for communicating with the backend
 */

// Get the API base URL depending on environment
// Using window.location to determine if we're in production
const isProduction = window.location.hostname !== 'localhost';
const API_BASE_URL = isProduction
  ? '/api' // In production, use relative path
  : 'http://localhost:3001/api'; // In development, use absolute URL to backend server

/**
 * General fetch wrapper with error handling
 */
async function fetchAPI<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_BASE_URL}/${endpoint}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    return await response.json() as T;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

/**
 * API client methods
 */
export const apiClient = {
  /**
   * Check if the backend is healthy
   */
  checkHealth: () => fetchAPI<{ status: string; message: string }>('health'),
  
  /**
   * Get sample data from the backend
   */
  getData: () => fetchAPI<{ message: string; timestamp: string }>('data'),
  
  /**
   * Example of a POST request
   */
  sendData: <T>(data: any) => fetchAPI<T>('data', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
};

export default apiClient; 