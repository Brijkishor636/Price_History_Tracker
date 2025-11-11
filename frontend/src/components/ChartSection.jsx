import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Maximize2, Download, MessageSquare } from 'lucide-react';

const ChartSection = ({ data, timeRange, setTimeRange }) => {
  const prices = data?.map(d => d.price) || [];
  const lowestPrice = Math.min(...prices);
  const highestPrice = Math.max(...prices);
  const averagePrice = Math.round(prices.reduce((a, b) => a + b, 0) / prices.length);

  return (
    <div className="bg-gradient-to-r from-blue-950 to-slate-900 rounded-2xl shadow-xl p-6 border border-blue-800">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white">Price History Graph</h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-500 rounded"></div>
            <span className="text-gray-300 text-sm">Offer Price</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-cyan-500 rounded"></div>
            <span className="text-gray-300 text-sm">Current Price</span>
          </div>
        </div>
      </div>

      <div className="flex space-x-2 mb-4">
        <button className="p-2 bg-slate-800 hover:bg-slate-700 rounded text-white transition-all">
          <Maximize2 className="w-4 h-4" />
        </button>
        <button className="p-2 bg-slate-800 hover:bg-slate-700 rounded text-white transition-all">
          <Download className="w-4 h-4" />
        </button>
        <button className="p-2 bg-slate-800 hover:bg-slate-700 rounded text-white transition-all">
          <MessageSquare className="w-4 h-4" />
        </button>
      </div>

      <div className="flex justify-between mb-4 text-sm">
        <span className="text-green-400 font-medium">Lowest: ₹{lowestPrice?.toLocaleString()}</span>
        <span className="text-yellow-400 font-medium">Average: ₹{averagePrice?.toLocaleString()}</span>
        <span className="text-red-400 font-medium">Highest: ₹{highestPrice?.toLocaleString()}</span>
      </div>

      <div className="bg-slate-800 rounded-xl p-4">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="date" stroke="#94a3b8" tick={{ fontSize: 12 }} />
            <YAxis stroke="#94a3b8" tick={{ fontSize: 12 }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1e293b', 
                border: '1px solid #334155',
                borderRadius: '8px',
                color: '#fff'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="price" 
              stroke="#06b6d4" 
              strokeWidth={2}
              fill="url(#colorPrice)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-end space-x-2 mt-4">
        {['1M', '3M', '6M', '1Y', 'All'].map(period => (
          <button
            key={period}
            onClick={() => setTimeRange(period)}
            className={`px-10 py-2 rounded-lg font-medium transition-all ${
              timeRange === period 
                ? 'bg-blue-600 text-white' 
                : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
            }`}
          >
            {period}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChartSection;