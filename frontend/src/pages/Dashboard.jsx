import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfigurations/config";
import { useNavigate } from "react-router-dom";

export default function Dashboard(){

    const navigate = useNavigate();
    async function logout(){
        await signOut(auth);
        navigate("/");
    }

    return <div className="text-xl font-bold p-10">
        <div>
            <p>email :- {auth.currentUser.email}</p>
        </div>
        <button onClick={logout} className="px-4 mt-4 py-2 rounded-lg bg-gray-600 cursor-pointer text-white font-medium">logout</button>
    </div>
}