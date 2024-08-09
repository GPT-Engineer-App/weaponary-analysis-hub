import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getWeaponsByCategory } from '../lib/database';

const CategoryAnalysis = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const { data: weapons, isLoading } = useQuery(['weapons', selectedCategory], () => getWeaponsByCategory(selectedCategory), {
    enabled: !!selectedCategory,
  });

  const categories = ['Auto Rifle', 'Hand Cannon', 'Pulse Rifle', 'Scout Rifle', 'Fusion Rifle', 'Sniper Rifle', 'Shotgun', 'Sidearm', 'Submachine Gun', 'Rocket Launcher', 'Grenade Launcher', 'Sword'];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Weapon Category Analysis</h1>
      
      <div className="mb-8">
        <label htmlFor="category" className="block mb-2">Select a category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {isLoading && <div>Loading...</div>}

      {weapons && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Weapons in {selectedCategory}</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {weapons.map((weapon) => (
              <li key={weapon.weapon_id} className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{weapon.name}</h3>
                <p>Type: {weapon.type}</p>
                <p>Element: {weapon.element}</p>
                <p>Power: {weapon.power}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryAnalysis;
