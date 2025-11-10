// import React, { useEffect, useState } from "react";

import { signInWithPopup } from "firebase/auth"
import { auth, githubProvider } from "../../firebaseConfigurations/config"
import { useNavigate } from "react-router-dom";

export default function FetchApi() {

  const navigate = useNavigate();

  async function signIn(){
    await signInWithPopup(auth, githubProvider);
    navigate("/dashboard");
  }

  return <div className="mt-10 p-10 border border-gray-500 rounded-lg">
      <button onClick={signIn} className="px-4 py-2 rounded bg-gray-600 text-white cursor-pointer">Login with github</button>
  </div>
  // const API_KEY = "MWQxMDAyMTQ2MGRjNGYwMTgwODI0ZjUzZDNiOTQwZGN8MzU1YjRjNjc3YQ";
  // const ASIN = "B0C5Y2B3C4";

  // const [product, setProduct] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const url = `https://api.app.outscraper.com/amazon-products?query=${ASIN}`;
  //       const res = await fetch(url, {
  //         headers: { "X-API-KEY": API_KEY },
  //       });

  //       if (!res.ok) throw new Error(`HTTP error! ${res.status}`);

  //       const data = await res.json();
  //       console.log("Fetched Data:", data);
  //       setProduct(data[0]);
  //     } catch (err) {
  //       console.error("Error fetching:", err);
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (loading) return <div className="text-gray-700 p-5">Loading...</div>;
  // if (error) return <div className="text-red-600 p-5">Error: {error}</div>;

  // return (
  //   <div className="pt-10">
  //     <div className="p-5 rounded-lg border border-gray-500 bg-white shadow-md">
  //       <h2 className="text-xl font-semibold mb-2 text-gray-800">
  //         {product?.title || "No Title"}
  //       </h2>
  //       <p className="text-lg text-green-600">{product?.price}</p>
  //       <a
  //         href={product?.url}
  //         target="_blank"
  //         rel="noreferrer"
  //         className="text-blue-500 underline"
  //       >
  //         View on Amazon
  //       </a>
  //     </div>
  //   </div>
  // );

}
