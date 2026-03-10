const BASE_URL = "https://jsonplaceholder.typicode.com";

export const userService = {
  async getUsers() {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  },
};