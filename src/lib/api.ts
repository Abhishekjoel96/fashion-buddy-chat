// src/lib/api.ts
const API_URL = import.meta.env.VITE_API_URL || 'https://fashion-buddy-backend-i2w8okihe-abhisheks-projects-76c99680.vercel.app';
const ADMIN_API_KEY = import.meta.env.VITE_ADMIN_API_KEY;

export const apiClient = {
  async addClient(name: string, phone: string) {
    return fetch(`${API_URL}/api/clients`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ADMIN_API_KEY
      },
      body: JSON.stringify({ name, phone_number: phone })
    }).then(res => res.json());
  },
  // Add other API methods (getAnalytics, etc.)
};
