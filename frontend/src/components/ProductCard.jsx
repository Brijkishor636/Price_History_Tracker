import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

const ProductCard = ({ name, model, specs, rating, reviews, image, currentPrice, mrp, discount }) => {
  return (
    <div className="bg-gradient-to-r from-blue-950 to-slate-900 rounded-2xl shadow-xl p-6 border border-blue-800">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Product Image */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-4 shadow-lg">
            <img
              src={image || 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500'}
              alt={name}
              className="w-full h-64 object-contain"
            />
          </div>
          <div className="flex items-center justify-center mt-4 space-x-1">
            {[...Array(10)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'}`} 
              />
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-2">{reviews?.toLocaleString()} reviews</p>
        </div>

        {/* Product Info */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-white mb-2">{name}</h2>
          <p className="text-xl text-gray-400 mb-4">{model}</p>

          {/* Specs */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {specs?.map((spec, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <span className="text-blue-400">✓</span>
                <span className="text-gray-300">{spec}</span>
              </div>
            ))}
          </div>

          {/* Price Section */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="text-5xl font-bold text-white">₹{currentPrice?.toLocaleString()}</div>
            {mrp && (
              <>
                <div className="text-2xl text-gray-500 line-through">₹{mrp?.toLocaleString()}</div>
                <div className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold text-lg">
                  {discount}% Off
                </div>
              </>
            )}
          </div>

          {/* Buy Button */}
          <button className="flex items-center justify-center space-x-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl text-xl transition-all shadow-lg">
            <span>Buy Now on Flipkart</span>
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;