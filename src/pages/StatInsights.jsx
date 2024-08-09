import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getStatBasedInsights } from '../lib/database';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const StatInsights = () => {
  const { data: insights, isLoading } = useQuery(['statInsights'], getStatBasedInsights);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const radarData = [
    { stat: 'Impact', value: insights.avg_impact },
    { stat: 'Range', value: insights.avg_range },
    { stat: 'Stability', value: insights.avg_stability },
    // Add more stats as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Stat-based Insights</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Average Weapon Stats</h2>
        <RadarChart width={500} height={400} data={radarData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="stat" />
          <PolarRadiusAxis />
          <Radar name="Average Stats" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </div>
    </div>
  );
};

export default StatInsights;
