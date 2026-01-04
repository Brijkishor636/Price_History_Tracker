import { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfigurations/config";
import VivoPriceTracker from "../components/VivoPriceTracker";
import { UserContext } from "../context/userContext.jsx"
import axios from "axios";
import { toast } from "react-toastify";

export default function Dashboard() {
  // const [user, setUser] = useState(null);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     if (!currentUser) navigate("/");
  //     setUser(currentUser);
  //   });
  //   return () => unsubscribe();
  // }, [navigate]);

  const context = useContext(UserContext);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  async function logout() {
    try{
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/logout`, {
      withCredentials: true
    })
    toast.success(response.data.msg,{
      position: "top-center"
    })
    }
    catch(e){
      console.log(e);
      toast.error("Hi, internal error!!", {
        position: "top-right"
      })
    }
  }

  return (
      <div>
        <div>
          <VivoPriceTracker />
        </div>

    <div className="text-xl font-bold p-10">
      {console.log(context)}
      {context.user ? (
        <>
          <p>email :- {context.user?.email}</p>
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
