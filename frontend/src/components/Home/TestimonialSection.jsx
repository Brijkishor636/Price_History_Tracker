import Marquee from "react-fast-marquee";

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Aarav Sharma",
      role: "Tech Enthusiast",
      text: "This price tracker saved me thousands! The UI is clean and the deals are real-time accurate.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Priya Verma",
      role: "Online Shopper",
      text: "I love the Trending Deals section — it’s my daily check before buying anything online!",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Rohit Mehta",
      role: "Gadget Reviewer",
      text: "Beautifully designed and super fast. The price history feature is incredibly helpful.",
      avatar: "https://randomuser.me/api/portraits/men/68.jpg",
    },
    {
      id: 4,
      name: "Sneha Kapoor",
      role: "College Student",
      text: "It’s my favorite shopping companion. Helps me track Flipkart and Amazon offers in one place.",
      avatar: "https://randomuser.me/api/portraits/women/29.jpg",
    },
    {
      id: 5,
      name: "Ravi Nair",
      role: "Frequent Buyer",
      text: "The best app for price comparison — accurate, quick, and beautiful interface.",
      avatar: "https://randomuser.me/api/portraits/men/71.jpg",
    },
    {
      id: 6,
      name: "Kavya Das",
      role: "Student Shopper",
      text: "Love the smooth animations and dark blue theme — very premium feel!",
      avatar: "https://randomuser.me/api/portraits/women/47.jpg",
    },
  ];

  return (
    <div>
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white rounded-2xl shadow-xl p-6 border border-blue-800">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold mb-3">💬 What Our Users Say</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Real feedback from users who’ve saved money and enjoyed a smarter shopping experience.
        </p>
      </div>

      {/* 💻 Desktop / Tablet: Auto-scrolling marquee */}
      <div className="hidden sm:block">
        <Marquee
          gradient={false}
          pauseOnHover={true}
          speed={45}
          className="flex gap-6"
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#0e1e45]/70 backdrop-blur-xl border border-blue-900/40 rounded-2xl p-6 mx-4 w-72 sm:w-80 flex-shrink-0 shadow-md hover:shadow-blue-500/30 transition-transform hover:scale-[1.05]"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-500 shadow-md"
                />
                <p className="text-gray-300 text-sm leading-relaxed">“{item.text}”</p>
                <div>
                  <h4 className="text-white font-semibold">{item.name}</h4>
                  <p className="text-blue-400 text-sm">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* 📱 Mobile: Manual horizontal scroll with scrollbar */}
      <div className="sm:hidden overflow-x-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-transparent mt-8 flex gap-4 pb-4 px-2">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-[#0e1e45]/70 backdrop-blur-lg border border-blue-900/40 rounded-2xl p-6 w-64 flex-shrink-0 shadow-md hover:shadow-blue-600/30 transition-transform hover:scale-[1.03]"
          >
            <div className="flex flex-col items-center text-center space-y-3">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-blue-600 shadow-md"
              />
              <p className="text-gray-300 text-sm leading-relaxed">“{item.text}”</p>
              <div>
                <h4 className="text-white font-semibold">{item.name}</h4>
                <p className="text-blue-400 text-xs">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
