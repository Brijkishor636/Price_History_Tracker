import axios from "axios";
import { useContext } from "react";
import { ProductContext } from "../context/productContext";

export const useProductSearch = () => {
  const { setProduct, setAllHistory, setLoading } = useContext(ProductContext);
  const url = import.meta.env.VITE_BACKEND_URL;

  const searchProduct = async (query) => {
    try {
      setLoading(true);
      const res = await axios.post(
        `${url}/api/v1/product`,
        { url: query },
        { withCredentials: true }
      );
    //   console.log(res);

      setProduct(res.data.product);
      setAllHistory(res.data.allHistory);
    } catch (err) {
      console.error("Search failed", err);
      setProduct(null);
      setAllHistory(null);
    } finally {
      setLoading(false);
    }
  };

  return { searchProduct };
};
