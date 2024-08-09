import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getWeapons, getWeaponComparison } from '../lib/database';

const Comparison = () => {
  const [weapon1, setWeapon1] = useState('');
  const [weapon2, setWeapon2] = useState('');

  const { data: weapons } = useQuery(['weapons'], getWeapons);
  const { data: comparisonData, isLoading } = useQuery(
    ['comparison', weapon1, weapon2],
    () => getWeaponComparison(weapon1, weapon2),
    { enabled: !!weapon1 && !!weapon2 }
  );

  const renderComparison = () => {
    if (!comparisonData || comparisonData.length !== 2) return null;

    const [w1, w2] = comparisonData;
    const stats = ['impact', 'range', 'stability', 'handling', 'reload_speed', 'aim_assistance', 'recoil_direction'];

    return (
      <div className="grid grid-cols-3 gap-4">
        <div></div>
        <div className="font-bold">{w1.name}</div>
        <div className="font-bold">{w2.name}</div>
        {stats.map(stat => (
          <React.Fragment key={stat}>
            <div className="font-semibold">{stat.replace('_', ' ').toUpperCase()}</div>
            <div>{w1[`stat_${stat}`]}</div>
            <div>{w2[`stat_${stat}`]}</div>
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Weapon Comparison</h1>
      
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div>
          <label htmlFor="weapon1" className="block mb-2">Select Weapon 1:</label>
          <select
            id="weapon1"
            value={weapon1}
            onChange={(e) => setWeapon1(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Select a weapon</option>
            {weapons && weapons.map((weapon) => (
              <option key={weapon.weapon_id} value={weapon.weapon_id}>{weapon.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="weapon2" className="block mb-2">Select Weapon 2:</label>
          <select
            id="weapon2"
            value={weapon2}
            onChange={(e) => setWeapon2(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Select a weapon</option>
            {weapons && weapons.map((weapon) => (
              <option key={weapon.weapon_id} value={weapon.weapon_id}>{weapon.name}</option>
            ))}
          </select>
        </div>
      </div>

      {isLoading && <div>Loading comparison data...</div>}
      {comparisonData && renderComparison()}
    </div>
  );
};

export default Comparison;
