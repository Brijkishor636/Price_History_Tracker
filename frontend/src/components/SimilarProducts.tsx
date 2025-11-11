const SimilarProducts = () => {
  const items = [
    { name: "Vivo T2", price: "₹14,499", img: "link.jpg" },
    { name: "Realme 11", price: "₹15,999", img: "link.jpg" },
    { name: "Redmi Note 12", price: "₹13,999", img: "link.jpg" }
  ];

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-3">Similar Products</h2>
      <div className="grid grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div key={index} className="bg-white shadow p-3 rounded-lg">
            <img src={item.img} alt={item.name} className="rounded-md" />
            <h3 className="mt-2 font-medium">{item.name}</h3>
            <p className="text-gray-600">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
