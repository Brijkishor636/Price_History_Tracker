import DropCard from "./DropCard";

const drops = [
  { id: 1, title: "OnePlus Nord CE 3 Lite", drop: "₹2,000", currentPrice: "₹19,999", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500", store: "Amazon" },
  { id: 2, title: "iQOO Z7 5G", drop: "₹3,000", currentPrice: "₹19,499", image: "https://images.unsplash.com/photo-1606813902853-6f7c64e2a6d5?w=500", store: "Flipkart" },
  { id: 3, title: "Motorola Edge 40", drop: "₹4,000", currentPrice: "₹22,999", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500", store: "Amazon" },
  { id: 4, title: "Poco X5 Pro", drop: "₹3,500", currentPrice: "₹18,999", image: "https://images.unsplash.com/photo-1606811876531-7e8b3660a1b5?w=500", store: "Flipkart" },
];

export default function MainDealsAndDrops() {
  return (
    <div className="w-full bg-linear-to-br from-[#0a1a3f] via-[#243779] to-[#0a1a3f] text-white rounded-2xl shadow-xl p-6 border border-blue-800">
      <div className="max-w-7xl mx-auto space-y-10">
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">💸 Latest Price Drops</h2>

          <div className="hidden sm:grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
            {drops.map((drop) => (
              <DropCard key={drop.id} drop={drop} />
            ))}
          </div>

          <div className="sm:hidden flex overflow-x-auto space-x-4 scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-blue-400 pb-4">
            {drops.map((drop) => (
              <div key={drop.id} className="flex-shrink-0 w-64">
                <DropCard drop={drop} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
