import { Star } from "lucide-react";

export default function DealCard({ deal }) {
  return (
    <div className="bg-[#0e1e45]/80 backdrop-blur-lg border border-blue-900/40 rounded-2xl shadow-md w-64 transition-transform hover:scale-[1.03] hover:shadow-xl">
      <img
        src={deal.image}
        alt={deal.title}
        className="w-full h-36 object-cover rounded-t-2xl"
      />

      <div className="p-4 space-y-2">
        <p className="text-[11px] text-blue-400 uppercase">{deal.store}</p>
        <h3 className="text-base font-semibold text-white truncate">
          {deal.title}
        </h3>

        <div className="flex items-center text-xs text-gray-400">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className={i < Math.floor(deal.rating) ? "text-yellow-400" : "text-gray-500"}
              fill={i < Math.floor(deal.rating) ? "#facc15" : "none"}
            />
          ))}
          <span className="ml-1 text-gray-400">{deal.reviews}</span>
        </div>

        <div className="flex items-end gap-1">
          <span className="text-lg font-bold text-white">{deal.price}</span>
          <span className="text-gray-400 line-through text-xs">
            {deal.oldPrice}
          </span>
          <span className="ml-2 bg-green-500 text-[10px] font-medium px-2 py-[2px] rounded-md">
            {deal.discount}
          </span>
        </div>

        <a
          href={deal.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-3 w-full bg-blue-600 hover:bg-blue-700 text-center text-white font-medium rounded-lg py-2 text-sm transition-all"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
}
