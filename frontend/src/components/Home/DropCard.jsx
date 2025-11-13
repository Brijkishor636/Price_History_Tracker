import { ArrowDownCircle } from "lucide-react";

export default function DropCard({ drop }) {
  return (
    <div className="bg-[#0e1e45]/80 backdrop-blur-md border border-blue-900/40 rounded-2xl shadow-md w-64 transition-transform hover:scale-[1.03] hover:shadow-xl">
      <img src={drop.image} alt={drop.title} className="w-full h-36 object-cover rounded-t-2xl" />
      <div className="p-4 space-y-2">
        <p className="text-[11px] text-blue-400 uppercase">{drop.store}</p>
        <h3 className="text-base font-semibold text-white truncate">{drop.title}</h3>

        <div className="flex items-center gap-2 text-sm text-green-400 mt-2">
          <ArrowDownCircle size={16} />
          <span>Price dropped by <strong>{drop.drop}</strong></span>
        </div>

        <div className="flex items-end gap-2 mt-1">
          <span className="text-lg font-bold text-white">{drop.currentPrice}</span>
        </div>

        <button className="block cursor-pointer mt-3 w-full bg-purple-600 hover:bg-purple-700 text-center text-white font-medium rounded-lg py-2 text-sm transition-all">
          View Deal
        </button>
      </div>
    </div>
  );
}
