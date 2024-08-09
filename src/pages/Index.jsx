import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getWeapons, getStatBasedInsights } from '../lib/database';
import { Weapon } from '../lib/models';

const Index = () => {
  const { data: weapons, isLoading: isLoadingWeapons } = useQuery(['weapons'], getWeapons);
  const { data: insights, isLoading: isLoadingInsights } = useQuery(['insights'], getStatBasedInsights);

  if (isLoadingWeapons || isLoadingInsights) {
    return <div>Loading...</div>;
  }

  const weaponCount = weapons ? weapons.length : 0;
  const categories = [...new Set(weapons.map(w => w.category))];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Destiny 2 Weapon Analysis</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Overall Statistics</h2>
          <p>Total Weapons: {weaponCount}</p>
          <p>Categories: {categories.join(', ')}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Average Weapon Stats</h2>
          <p>Impact: {insights.avg_impact.toFixed(2)}</p>
          <p>Range: {insights.avg_range.toFixed(2)}</p>
          <p>Stability: {insights.avg_stability.toFixed(2)}</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Analysis Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link to="/category-analysis" className="bg-blue-500 text-white p-4 rounded-lg text-center hover:bg-blue-600 transition-colors">
            Weapon Category Analysis
          </Link>
          <Link to="/perk-analysis" className="bg-green-500 text-white p-4 rounded-lg text-center hover:bg-green-600 transition-colors">
            Perk Analysis
          </Link>
          <Link to="/stat-insights" className="bg-yellow-500 text-white p-4 rounded-lg text-center hover:bg-yellow-600 transition-colors">
            Stat-based Insights
          </Link>
          <Link to="/comparison" className="bg-purple-500 text-white p-4 rounded-lg text-center hover:bg-purple-600 transition-colors">
            Weapon Comparison
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
