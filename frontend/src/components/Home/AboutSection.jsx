export default function AboutSection() {
  return (
    <section className="w-full bg-linear-to-b from-[#0a1a3f] via-[#243779] to-[#0a1a3f] text-white rounded-2xl shadow-xl p-8 border border-blue-800">
      <div className="max-w-5xl mx-auto space-y-10">
        <h2 className="text-3xl font-bold mb-6 text-center">About Price Tracker App</h2>

        <p className="text-gray-200 leading-relaxed">
          When it comes to online shopping, historical price is an important factor to consider. A product's price history can help you determine if now is the time to buy, or if you should wait for a better deal. Price history is the record of how a product's price has changed over time.
        </p>

        <p className="text-gray-200 leading-relaxed">
          Price History App offers you graphs & data for Price History, so that you can see how the price of a product has varied over the last few weeks, months, or years.
        </p>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Benefits</h3>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>Get an idea of the product's historical selling price to decide if the current pricing is justifiable.</li>
            <li>Identify price patterns over time so you can plan your purchase in advance.</li>
            <li>Predict future prices of products based on historical price trends.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">What is a Price Tracker?</h3>
          <p className="text-gray-200 leading-relaxed">
            Price History is a free price monitoring tool. It helps you find products' historical pricing information. You can find the lowest ever online price of the product you want. This tool displays the product's historical price changes in the form of interactive charts. It helps you find the best price range to buy the product.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Unique Features of Price Tracker App</h3>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>Lowest price after deducting lightning deal & coupon</li>
            <li>"Price + Shipping" comparison</li>
            <li>Seller-wise price tracking</li>
            <li>Shopping assistance</li>
            <li>Interactive historical charts</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
