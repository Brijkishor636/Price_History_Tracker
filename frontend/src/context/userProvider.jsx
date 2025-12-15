// src/context/UserProvider.jsx
import { useState, useEffect } from "react";
import { UserContext } from "./userContext";
import axios from "axios";

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCurrentUser() {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/user/current", {
          withCredentials: true
        });

        setUser(res.data.user || null);
      } catch (err) {
        console.error("Error fetching user:", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    fetchCurrentUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
}
