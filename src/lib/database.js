const API_URL = 'http://localhost:3000/api'; // Replace with your actual API URL

export const getWeapons = async () => {
  const response = await fetch(`${API_URL}/weapons`);
  return response.json();
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
