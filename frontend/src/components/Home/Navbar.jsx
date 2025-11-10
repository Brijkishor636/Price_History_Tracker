import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/img_bg3.png";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
const [isOpen, setIsOpen] = useState(false);
const navigate = useNavigate();

return ( <nav className="sticky top-0 left-0 w-full bg-linear-to-r from-purple-600 via-indigo-600 to-blue-600 text-white shadow-lg z-50"> <div className="max-w-7xl mx-auto px-5 sm:px-8 flex justify-between items-center py-3">
<Link to={"/"} className="flex items-center gap-2"> <img src={logo} alt="logo" className="w-7 h-7" /> <span className="font-bold text-lg tracking-wide">Price Tracker</span> </Link>

    <div className="hidden md:flex items-center gap-8">
      <a href="#" className="hover:text-blue-200 transition-colors">Home</a>
      <a href="#" className="hover:text-blue-200 transition-colors">Dashboard</a>
      <a href="#" className="hover:text-blue-200 transition-colors">Portfolio</a>
      <a href="#" className="hover:text-blue-200 transition-colors">Pricing</a>
    </div>

    <div className="hidden md:flex">
      <Link to={"/signin"} className="bg-white text-indigo-600 font-medium rounded-full px-5 py-2 hover:bg-blue-50 hover:text-indigo-700 transition cursor-pointer">
        Get started
      </Link>
    </div>

    <button
      onClick={() => setIsOpen(!isOpen)}
      className="md:hidden p-2 rounded hover:bg-white/10 transition"
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>

  {isOpen && (
    <div className="md:hidden bg-linear-to-r from-purple-600 via-indigo-600 to-blue-600 border-t border-white/20">
      <div className="flex flex-col space-y-3 px-5 py-4">
        <a href="#" className="hover:text-blue-200 transition">Home</a>
        <a href="#" className="hover:text-blue-200 transition">Dashboard</a>
        <a href="#" className="hover:text-blue-200 transition">Portfolio</a>
        <a href="#" className="hover:text-blue-200 transition">Pricing</a>
        <button onClick={()=>{navigate("/signin")}} className="bg-white text-indigo-600 font-medium rounded-full px-5 py-2 hover:bg-blue-50 hover:text-indigo-700 transition cursor-pointer">
          Get started
        </button>
      </div>
    </div>
  )}
</nav>
)
}
