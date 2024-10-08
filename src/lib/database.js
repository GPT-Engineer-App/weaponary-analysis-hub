const API_URL = 'http://localhost:3000/api'; // Replace with your actual API URL

// Mock data
const mockWeapons = [
  { weapon_id: 1, name: "Auto Rifle 1", category: "Auto Rifle", type: "Primary", element: "Kinetic", power: 1350 },
  { weapon_id: 2, name: "Hand Cannon 1", category: "Hand Cannon", type: "Primary", element: "Solar", power: 1340 },
  // Add more mock weapons as needed
];

export const getWeapons = async () => {
  // For development, return mock data instead of making an API call
  return Promise.resolve(mockWeapons);
};

export const getWeaponsByCategory = async (category) => {
  const response = await fetch(`${API_URL}/weapons/category/${category}`);
  return response.json();
};

export const getPerkAnalysis = async () => {
  const response = await fetch(`${API_URL}/perk-analysis`);
  return response.json();
};

export const getStatBasedInsights = async () => {
  const response = await fetch(`${API_URL}/stat-insights`);
  return response.json();
};

export const getWeaponComparison = async (weaponId1, weaponId2) => {
  const response = await fetch(`${API_URL}/weapon-comparison?id1=${weaponId1}&id2=${weaponId2}`);
  return response.json();
};
