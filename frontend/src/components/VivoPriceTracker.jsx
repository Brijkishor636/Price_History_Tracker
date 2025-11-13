import React, { useState } from "react";
import Header from "./Header";
import ProductCard from "./ProductCard";
import PriceStats from "./PriceStats";
import ChartSection from "./ChartSection";
import PriceAlert from "./PriceAlert";
import SimilarProducts from "./SimilarProducts";

const VivoPriceTracker = () => {
  const [timeRange, setTimeRange] = useState("1M");

  const priceData = [
    { date: "Jan 1", price: 17999 },
    { date: "Jan 8", price: 18200 },
    { date: "Jan 15", price: 18150 },
    { date: "Jan 22", price: 17850 },
    { date: "Jan 29", price: 18000 },
    { date: "Feb 5", price: 18100 },
    { date: "Feb 12", price: 17950 },
    { date: "Feb 19", price: 18050 },
    { date: "Feb 26", price: 18100 },
  ];

  const productData = {
    name: "Vivo T2 5G",
    model: "128GB Storage, 6GB RAM",
    specs: ["5G Ready", "AMOLED Display", "50MP Camera", "5000mAh Battery"],
    rating: 9,
    reviews: 15420,
    currentPrice: 18100,
    mrp: 21999,
    discount: 18,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
  };

  // Similar products data
  const similarProductsData = [
    {
      name: "Vivo T2x",
      model: "128GB Storage, 6GB RAM",
      image: "https://images.unsplash.com/photo-1580894894515-0e8c9b833e1d?w=200",
      price: 16999,
      rating: 8.5,
    },
    {
      name: "Vivo T1 Pro",
      model: "128GB Storage, 8GB RAM",
      image: "https://images.unsplash.com/photo-1603898037225-3a3e9c24e0ad?w=200",
      price: 18999,
      rating: 9,
    },
    {
      name: "Vivo Y33s",
      model: "128GB Storage, 4GB RAM",
      image: "https://images.unsplash.com/photo-1580910051077-1f2901b6b5f6?w=200",
      price: 14999,
      rating: 8,
    },
  ];

  return (
    <div className="min-h-screen w-full flex justify-center items-start bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 py-10 px-4 sm:px-8">
      <div className="w-full mx-auto space-y-6">
        <Header />

        <ProductCard
          name={productData.name}
          model={productData.model}
          specs={productData.specs}
          rating={productData.rating}
          reviews={productData.reviews}
          image={productData.image}
          currentPrice={productData.currentPrice}
          mrp={productData.mrp}
          discount={productData.discount}
        />

        <PriceStats
          currentPrice={18100}
          lastPrice={17800}
          highest={18200}
          lowest={17850}
        />

        <ChartSection
          data={priceData}
          timeRange={timeRange}
          setTimeRange={setTimeRange}
        />

        {/* Similar products section */}
        <SimilarProducts products={similarProductsData} />

        <PriceAlert currentPrice={productData.currentPrice} />

        <div className="text-center text-gray-400 text-sm py-4 bg-gradient-to-r from-blue-950 to-slate-900 rounded-xl p-4 border border-blue-800">
          <p className="mb-1">📊 Prices updated every 6 hours • Last update: 2 hours ago</p>
          <p>🛒 Data sourced from Flipkart, Amazon, and Vivo Store</p>
        </div>
      </div>
    </div>
  );
};

export default VivoPriceTracker;
