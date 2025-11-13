export default function ActionSection() {
  const actions = [
    {
      id: 1,
      title: "Track a Product",
      description: "Add a product to track its price history and get notified on drops.",
      button: "Start Tracking",
    },
    {
      id: 2,
      title: "View Price History",
      description: "See historical price trends for your favorite products.",
      button: "View History",
    },
    {
      id: 3,
      title: "Compare Prices",
      description: "Compare prices across multiple stores to get the best deal.",
      button: "Compare Now",
    },
  ];

  return (
    <div className="w-full bg-linear-to-br from-[#0a1a3f] via-[#21336f] to-[#0a1a3f] text-white rounded-2xl shadow-xl p-6 border border-blue-800">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold mb-8 text-center">⚡ Take Action</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
          {actions.map((action) => (
            <div
              key={action.id}
              className="bg-[#14254e] rounded-2xl p-6 w-full max-w-xs flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 border border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-4">{action.title}</h3>
              <p className="text-gray-300 mb-6">{action.description}</p>
              <button className="bg-purple-600 hover:bg-purple-700 cursor-pointer px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
                {action.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
