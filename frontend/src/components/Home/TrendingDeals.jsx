import DealCard from "./DealCard";

const dummyDeals = [
  {
    id: 1,
    title: "Vivo T2 5G",
    price: "₹18,100",
    oldPrice: "₹21,999",
    discount: "18% Off",
    rating: 4.5,
    reviews: "15,420",
    image:
      "https://images.unsplash.com/photo-1603898037225-6f9b70a0eebd?w=500&auto=format&fit=crop&q=60",
    store: "Amazon",
    link: "#",
  },
  {
    id: 2,
    title: "Samsung Galaxy M14",
    price: "₹12,999",
    oldPrice: "₹15,999",
    discount: "19% Off",
    rating: 4.2,
    reviews: "10,300",
    image:
      "https://images.unsplash.com/photo-1606813902914-8e2e1c8b1b08?w=500&auto=format&fit=crop&q=60",
    store: "Flipkart",
    link: "#",
  },
  {
    id: 3,
    title: "Redmi Note 12",
    price: "₹13,499",
    oldPrice: "₹17,499",
    discount: "23% Off",
    rating: 4.6,
    reviews: "18,220",
    image:
      "https://images.unsplash.com/photo-1606811876531-7e8b3660a1b5?w=500&auto=format&fit=crop&q=60",
    store: "Amazon",
    link: "#",
  },
  {
    id: 4,
    title: "Realme Narzo 60",
    price: "₹14,499",
    oldPrice: "₹17,999",
    discount: "20% Off",
    rating: 4.3,
    reviews: "9,870",
    image:
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&auto=format&fit=crop&q=60",
    store: "Flipkart",
    link: "#",
  },
  {
    id: 5,
    title: "iQOO Z7 5G",
    price: "₹19,499",
    oldPrice: "₹23,999",
    discount: "19% Off",
    rating: 4.7,
    reviews: "21,140",
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60",
    store: "Amazon",
    link: "#",
  },
  {
    id: 6,
    title: "OnePlus Nord CE 3 Lite",
    price: "₹19,999",
    oldPrice: "₹22,999",
    discount: "13% Off",
    rating: 4.5,
    reviews: "12,750",
    image:
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&auto=format&fit=crop&q=60",
    store: "Amazon",
    link: "#",
  },
  {
    id: 7,
    title: "Motorola Edge 40",
    price: "₹22,999",
    oldPrice: "₹26,999",
    discount: "15% Off",
    rating: 4.4,
    reviews: "7,300",
    image:
      "https://images.unsplash.com/photo-1606813902853-6f7c64e2a6d5?w=500&auto=format&fit=crop&q=60",
    store: "Flipkart",
    link: "#",
  },
  {
    id: 8,
    title: "Poco X5 Pro",
    price: "₹18,999",
    oldPrice: "₹22,999",
    discount: "17% Off",
    rating: 4.6,
    reviews: "11,680",
    image:
      "https://images.unsplash.com/photo-1606813902853-6f7c64e2a6d5?w=500&auto=format&fit=crop&q=60",
    store: "Amazon",
    link: "#",
  },
];

export default function TrendingDeals() {
  return (
    <div className="w-full bg-linear-to-br from-[#0a1a3f] via-[#1b2a5c] to-[#0a1a3f] text-white rounded-2xl shadow-xl p-6 border border-blue-800">
      <div className="max-w-7xl space-y-10">
        <h2 className="text-3xl font-bold mb-10 text-gray-100 text-center">
          🔥 New Trending Deals
        </h2>

        <div className="hidden sm:grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
          {dummyDeals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>

        <div className="sm:hidden flex overflow-x-auto space-x-4 scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-blue-400 pb-4">
          {dummyDeals.map((deal) => (
            <div key={deal.id} className="flex-shrink-0 w-64">
              <DealCard deal={deal} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
