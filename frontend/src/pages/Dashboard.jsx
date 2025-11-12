import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebaseConfigurations/config";
import { useNavigate } from "react-router-dom";
import VivoPriceTracker from "../components/VivoPriceTracker";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     if (!currentUser) navigate("/");
  //     setUser(currentUser);
  //   });
  //   return () => unsubscribe();
  // }, [navigate]);

  async function logout() {
    await signOut(auth);
  }

  return (
      <div>
        <div>
          <VivoPriceTracker />
        </div>


    <div className="text-xl font-bold p-10">
      {user ? (
        <>
          <p>email :- {user.email}</p>
          <button
            onClick={logout}
            className="px-4 mt-4 py-2 rounded-lg bg-gray-600 cursor-pointer text-white font-medium"
          >
            Logout
          </button>
        </>
      ) : (
        <p>Loading user...</p>
      )}
    </div>
    </div>
  );
}
