import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPerkAnalysis } from '../lib/database';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const PerkAnalysis = () => {
  const { data: perkData, isLoading } = useQuery(['perkAnalysis'], getPerkAnalysis);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Perk Analysis</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Perk Distribution</h2>
        <BarChart width={600} height={400} data={perkData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="perk_overall" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default PerkAnalysis;
