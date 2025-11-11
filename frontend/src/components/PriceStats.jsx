import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const PriceStats = ({ currentPrice, lastPrice, highest, lowest }) => {
  const priceChange = currentPrice - lastPrice;
  const percentChange = ((priceChange / lastPrice) * 100).toFixed(2);

  return (
    <div className="bg-gradient-to-r from-blue-950 to-slate-900 rounded-2xl shadow-xl p-6 border border-blue-800">
      <h2 className="text-2xl font-bold text-white mb-6">Price Statistics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Current Price */}
        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
          <p className="text-gray-400 text-sm mb-2">Current Price</p>
          <p className="text-3xl font-bold text-white mb-2">₹{currentPrice?.toLocaleString()}</p>
          <div className={`flex items-center space-x-1 text-sm ${priceChange > 0 ? 'text-red-400' : priceChange < 0 ? 'text-green-400' : 'text-gray-400'}`}>
            {priceChange > 0 ? <TrendingUp className="w-4 h-4" /> : priceChange < 0 ? <TrendingDown className="w-4 h-4" /> : <Minus className="w-4 h-4" />}
            <span>{Math.abs(percentChange)}% from last update</span>
          </div>
        </div>

        {/* Lowest Price */}
        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
          <p className="text-gray-400 text-sm mb-2">Lowest Price</p>
          <p className="text-3xl font-bold text-cyan-400 mb-2">₹{lowest?.toLocaleString()}</p>
          <p className="text-sm text-gray-500">All time low</p>
        </div>

        {/* Highest Price */}
        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
          <p className="text-gray-400 text-sm mb-2">Highest Price</p>
          <p className="text-3xl font-bold text-red-400 mb-2">₹{highest?.toLocaleString()}</p>
          <p className="text-sm text-gray-500">All time high</p>
        </div>

        {/* Average Price */}
        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
          <p className="text-gray-400 text-sm mb-2">Average Price</p>
          <p className="text-3xl font-bold text-yellow-400 mb-2">₹{Math.round((highest + lowest) / 2)?.toLocaleString()}</p>
          <p className="text-sm text-gray-500">Estimated average</p>
        </div>
      </div>
    </div>
  );
};

export default PriceStats;