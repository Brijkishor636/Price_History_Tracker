import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
return ( <footer className="bg-linear-to-r from-purple-900 via-indigo-900 to-blue-900 text-white"> 
<div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 flex flex-col md:flex-row justify-between gap-10">
<div className="flex flex-col gap-3"> <h2 className="text-xl font-bold">PriceTracker</h2> <p className="text-sm text-white/80 max-w-xs">
Track price history from Flipkart, Amazon, and other stores easily. Get alerts and find the best deals in real time. </p> </div>

    {/* Links Section */}
    <div className="flex flex-col gap-2">
      <h3 className="font-semibold">Quick Links</h3>
      <Link to={"/"} className="hover:text-blue-200 transition">Home</Link>
      <a href="#" className="hover:text-blue-200 transition">Track Prices</a>
      <a href="#" className="hover:text-blue-200 transition">Pricing</a>
      <a href="#" className="hover:text-blue-200 transition">Contact</a>
    </div>

    {/* Contact Section */}
    <div className="flex flex-col gap-2">
      <h3 className="font-semibold">Contact Us</h3>
      <p className="text-white/80 text-sm">support@pricetracker.com</p>
      <p className="text-white/80 text-sm">+91 98765 43210</p>

      <div className="flex gap-3 mt-2">
        <a href="#" className="hover:text-blue-200 transition"><Facebook size={20} /></a>
        <a href="#" className="hover:text-blue-200 transition"><Twitter size={20} /></a>
        <a href="#" className="hover:text-blue-200 transition"><Instagram size={20} /></a>
        <a href="#" className="hover:text-blue-200 transition"><Linkedin size={20} /></a>
      </div>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="border-t border-white/20 mt-5">
    <p className="text-center text-white/70 text-sm py-4">
      &copy; {new Date().getFullYear()} PriceTracker. All rights reserved.
    </p>
  </div>
</footer>
);
}
