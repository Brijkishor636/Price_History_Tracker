import React, { useState } from 'react';
import { Bell, Check } from 'lucide-react';

const PriceAlert = ({ currentPrice }) => {
  const [targetPrice, setTargetPrice] = useState('');
  const [alertSet, setAlertSet] = useState(false);

  const handleSetAlert = () => {
    if (targetPrice && !isNaN(targetPrice)) {
      setAlertSet(true);
      setTimeout(() => setAlertSet(false), 3000);
    }
  };

  return (
    <div className="bg-linear-to-r from-blue-950 to-slate-900 rounded-2xl shadow-xl p-6 border border-blue-800">
      <h2 className="text-2xl font-bold text-white mb-4">Set Price Alert</h2>
      <p className="text-gray-400 mb-6">
        Get notified when the price drops below your target. We'll send you an email alert.
      </p>

      <div className="flex flex-col md:flex-row items-start md:items-center space-y-3 md:space-y-0 md:space-x-4">
        <div className="flex-1 w-full">
          <label className="text-gray-400 text-sm mb-2 block">Target Price (₹)</label>
          <input
            type="number"
            placeholder={`e.g., ${currentPrice - 1000}`}
            value={targetPrice}
            onChange={(e) => setTargetPrice(e.target.value)}
            className="w-full px-4 py-3 bg-slate-800 text-white border border-slate-700 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
          />
        </div>

        <button 
          onClick={handleSetAlert}
          className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all font-medium md:mt-6"
        >
          <Bell className="w-5 h-5" />
          <span>Set Alert</span>
        </button>
      </div>

      {alertSet && (
        <div className="mt-4 bg-green-900 border border-green-700 text-green-200 px-4 py-3 rounded-lg flex items-center space-x-2">
          <Check className="w-5 h-5" />
          <span>Price alert set for ₹{targetPrice}! We'll notify you when price drops.</span>
        </div>
      )}

      <div className="mt-6 bg-slate-800 rounded-xl p-4">
        <h3 className="text-white font-medium mb-2">Why set price alerts?</h3>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">✓</span>
            <span>Save money by buying at the right time</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">✓</span>
            <span>Get instant email notifications</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">✓</span>
            <span>Never miss a great deal again</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PriceAlert;