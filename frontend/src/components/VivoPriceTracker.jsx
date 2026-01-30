import { useContext, useState, useMemo } from "react";
import Header from "./Header";
import ProductCard from "./ProductCard";
import PriceStats from "./PriceStats";
import ChartSection from "./ChartSection";
import PriceAlert from "./PriceAlert";
import SimilarProducts from "./SimilarProducts";
import { ProductContext } from "../context/productContext";
import { Link } from "react-router-dom";


const DEMO_PRODUCT = {
  name: "Vivo T2 5G",
  imageUrl:
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
  currentPrice: 18100,
};

const DEMO_HISTORY = [
  { date: "2024-01-01", price: 17999 },
  { date: "2024-01-08", price: 18200 },
  { date: "2024-01-15", price: 18150 },
  { date: "2024-01-22", price: 17850 },
  { date: "2024-01-29", price: 18000 },
  { date: "2024-02-05", price: 18100 },
  { date: "2024-02-12", price: 17950 },
  { date: "2024-02-19", price: 18050 },
];


const VivoPriceTracker = () => {
  const { product, allHistory, loading } = useContext(ProductContext);
  const [timeRange, setTimeRange] = useState("1M");

  
  const resolvedProduct = product ?? DEMO_PRODUCT;
  const resolvedHistory = allHistory ?? DEMO_HISTORY;

  const priceData = useMemo(
    () =>
      resolvedHistory.map((item) => ({
        date: new Date(item.date).toLocaleDateString("en-IN", {
          month: "short",
          year: "numeric",
        }),
        price: item.price,
      })),
    [resolvedHistory]
  );


  const prices = resolvedHistory.map((p) => p.price);
  const highest = Math.max(...prices);
  const lowest = Math.min(...prices);
  const lastPrice =
    prices.length > 1
      ? prices[prices.length - 2]
      : resolvedProduct.currentPrice;

  if (loading) {
    return (
      <p className="text-white text-center text-lg mt-10">
        Loading product…
      </p>
    );
  }

  return (
    <div className="min-h-screen w-full flex justify-center items-start bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 py-10 px-4 sm:px-8">
      <div className="w-full mx-auto space-y-6">
        <Header />

        {!product && (
          <p className="text-center text-yellow-400 text-sm">
            Showing demo data — search to see real prices <Link to={"/"} className="underline text-blue-700">search</Link>
          </p>
        )}

        <ProductCard
          name={resolvedProduct.name}
          model="Official Product"
          specs={["Price history tracking", "Auto-updated"]}
          rating={8}
          reviews={resolvedHistory.length}
          image={resolvedProduct.imageUrl}
          currentPrice={resolvedProduct.currentPrice}
          mrp={highest}
          discount={Math.round(
            ((highest - resolvedProduct.currentPrice) / highest) * 100
          )}
        />

        <PriceStats
          currentPrice={resolvedProduct.currentPrice}
          lastPrice={lastPrice}
          highest={highest}
          lowest={lowest}
        />

        <ChartSection
          data={priceData}
          timeRange={timeRange}
          setTimeRange={setTimeRange}
        />

        {/* Similar products placeholder */}
        <SimilarProducts products={[]} />

        <PriceAlert currentPrice={resolvedProduct.currentPrice} />

        <div className="text-center text-gray-400 text-sm py-4 bg-gradient-to-r from-blue-950 to-slate-900 rounded-xl p-4 border border-blue-800">
          <p className="mb-1">
            📊 Prices updated automatically • Last update:{" "}
            {new Date(
              resolvedHistory[resolvedHistory.length - 1].date
            ).toLocaleDateString()}
          </p>
          <p>🛒 Data sourced from tracked product link</p>
        </div>
      </div>
    </div>
  );
};

export default VivoPriceTracker;
