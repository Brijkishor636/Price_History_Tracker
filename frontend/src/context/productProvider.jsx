import { useState } from "react";
import { ProductContext } from "./productContext";

export default function ProductProvider({ children }) {
  const [product, setProduct] = useState(null);
  const [allHistory, setAllHistory] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <ProductContext.Provider value={{ product, setProduct, allHistory, setAllHistory, loading, setLoading }}>
      {children}
    </ProductContext.Provider>
  );
}
