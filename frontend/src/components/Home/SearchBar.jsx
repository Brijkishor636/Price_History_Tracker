import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", query);
  };

  return (
    <div id="searchbar" className="flex items-center justify-center bg-linear-to-br from-[#0a1a3f] via-[#21336f] to-[#0a1a3f] rounded-2xl shadow-xl p-6 border border-blue-800">
      <div className="bg-[#0e1e45]/80 backdrop-blur-lg shadow-2xl rounded-3xl p-10 max-w-4xl w-full text-center border border-blue-800/30">
        <h1 className="text-white text-3xl font-semibold mb-6 tracking-wide">
          Search Price History
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="relative flex flex-col items-center w-full">
            <div className="flex items-center w-full bg-[#1b2a5c]/70 rounded-2xl px-5 py-4 border border-blue-800/40 shadow-inner focus-within:border-blue-400 transition">
              <Search className="text-gray-400 mr-3" size={22} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter Product Link or Name"
                className="w-full bg-transparent outline-none text-white text-lg placeholder-gray-400"
              />
            </div>

            <button
              type="submit"
              className="mt-5 bg-blue-600 hover:bg-blue-700 text-white cursor-pointer font-semibold rounded-xl px-10 py-3 transition-all duration-300 shadow-lg w-full max-w-md"
            >
              Search
            </button>
          </div>
        </form>

        <p className="text-gray-300 text-sm mt-6">
          Want to search a historical price chart or the lowest ever price?
          Paste the product’s link or name and hit search.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6 text-blue-300 text-sm">
          <a href="#" className="hover:text-blue-400">
            Amazon Price Tracker
          </a>
          <span>|</span>
          <a href="#" className="hover:text-blue-400">
            Flipkart Price Tracker
          </a>
          <span>|</span>
          <a href="#" className="hover:text-blue-400">
            Latest Deals
          </a>
          <span>|</span>
          <a href="#" className="hover:text-blue-400">
            Price Drop
          </a>
        </div>
      </div>
    </div>
  );
}
