import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, githubProvider } from "../firebaseConfigurations/config";
import axios from "axios"
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  async function signInWithGoogle() {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  }

  async function signInWithGitHub() {
    try {
      await signInWithPopup(auth, githubProvider);
      navigate("/dashboard");
    } catch (error) {
      console.error("GitHub Sign-In Error:", error);
    }
  }

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  // console.log(BACKEND_URL);

  const handleEmailPasswordLogin = async (e) => {
    e.preventDefault();
    let response;
    try{
      response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, loginData)
      toast.success("Login successfully..", {
        position: "top-center"
      })
      navigate("/dashboard")
    }
    catch(e){
      console.log(e);
      toast.error("Error during login!!",{
        position: "top-right"
      })
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-linear-to-b from-[#10194E] to-[#0B1129] text-white font-sans">

      <div className="flex-grow w-full flex flex-col md:flex-row min-h-screen">
        <div className="w-full md:w-1/2 flex items-center justify-center py-10 px-4 md:px-10">
          <form
            onSubmit={handleEmailPasswordLogin}
            className="md:w-96 w-full max-w-sm flex flex-col items-center justify-center p-8 rounded-2xl shadow-2xl bg-[#131C43]/80 backdrop-blur-md border border-[#1E2A5A]/60"
          >
            <h2 className="text-4xl font-semibold text-white">Sign in</h2>
            <p className="text-sm text-gray-300 mt-2">
              Welcome back! Please sign in to continue
            </p>

            <button
              onClick={signInWithGoogle}
              type="button"
              className="w-full hover:bg-[#243374] cursor-pointer mt-8 bg-[#1D2B5C] flex items-center justify-center h-12 rounded-full transition-colors"
            >
              <img
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
                alt="googleLogo"
                className="w-20 h-20 mr-2"
              />
            </button>

            <button
              onClick={signInWithGitHub}
              type="button"
              className="w-full hover:bg-[#243374] cursor-pointer mt-3 bg-[#1D2B5C] flex items-center justify-center h-12 rounded-full transition-colors"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="githubLogo"
                className="w-5 h-5 mr-2 invert"
              />
              Continue with GitHub
            </button>

            <div className="flex items-center gap-4 w-full my-5">
              <div className="w-full h-px bg-gray-600/60"></div>
              <p className="w-full text-nowrap text-sm text-gray-400">
                or sign in with email
              </p>
              <div className="w-full h-px bg-gray-600/60"></div>
            </div>

            <div className="flex items-center w-full bg-transparent border border-gray-600 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <svg
                width="16"
                height="11"
                viewBox="0 0 16 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z"
                  fill="#9CA3AF"
                />
              </svg>
              <input
                type="email"
                placeholder="Email id"
                value={loginData.email}
                onChange={(e) => setLoginData({
                  ...loginData,
                  email: e.target.value
                })}
                className="bg-transparent text-gray-200 placeholder-gray-400 outline-none text-sm w-full h-full"
                required
              />
            </div>

            <div className="flex items-center mt-6 w-full bg-transparent border border-gray-600 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <svg
                width="13"
                height="17"
                viewBox="0 0 13 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z"
                  fill="#9CA3AF"
                />
              </svg>
              <input
                type="password"
                placeholder="Password"
                value={loginData.password}
                onChange={(e) => setLoginData({
                  ...loginData,
                  password: e.target.value
                })}
                className="bg-transparent text-gray-200 placeholder-gray-400 outline-none text-sm w-full h-full"
                required
              />
            </div>

            <div className="w-full flex items-center justify-between mt-8 text-gray-400">
              <div className="flex items-center gap-2">
                <input
                  className="h-4 w-4 accent-indigo-500"
                  type="checkbox"
                  id="checkbox"
                />
                <label className="text-sm" htmlFor="checkbox">
                  Remember me
                </label>
              </div>
              <a
                className="text-sm underline hover:text-indigo-400"
                href="#"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="mt-8 cursor-pointer w-full h-11 rounded-full text-white bg-indigo-500 hover:bg-indigo-600 transition-all"
            >
              Login
            </button>

            <p className="text-gray-400 text-sm mt-4">
              Don’t have an account?{" "}
              <Link className="text-indigo-400 hover:underline" to="/signup">
                Sign up
              </Link>
            </p>
          </form>
        </div>

        <div className="hidden md:flex md:w-1/2 items-center justify-center p-8 bg-black/40 md:rounded-l-[100px] border-l border-indigo-700/50 shadow-inner shadow-black/50">
          <div className="text-center">
            <div className="flex flex-col items-center justify-center text-5xl font-extrabold mb-4 text-indigo-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 17a2 2 0 012-2h14a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2z"
                />
              </svg>
              <span className="mt-2">Price History Tracker</span>
            </div>

            <p className="text-xl font-medium text-gray-300 mt-4">
              Track prices, save money. Effortlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
