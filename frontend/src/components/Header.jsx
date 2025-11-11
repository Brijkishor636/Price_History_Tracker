import React from 'react';
import { TrendingDown, Bell } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-blue-950 to-slate-900 rounded-2xl shadow-xl p-6 border border-blue-800">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <TrendingDown className="w-10 h-10 text-blue-400" />
          <div>
            <h1 className="text-3xl font-bold text-white">Price History Tracker</h1>
            <p className="text-gray-400 text-sm">Track prices and save money</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all">
            <Bell className="w-5 h-5" />
            <span className="font-medium">Alerts</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;