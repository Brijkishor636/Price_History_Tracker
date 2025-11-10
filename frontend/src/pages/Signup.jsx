import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Home/Footer";
import Navbar from "../components/Home/Navbar";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, githubProvider } from "../firebaseConfigurations/config";

export default function Signup() {
  const navigate = useNavigate();

  async function signInWithGoogle() {
    await signInWithPopup(auth, googleProvider);
    navigate("/dashboard");
  }

  async function signInWithGithub() {
    await signInWithPopup(auth, githubProvider);
    navigate("/dashboard");
  }

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-10">
        <form className="md:w-96 w-80 flex flex-col items-center justify-center p-5 px-10 rounded-lg bg-linear-to-br from-pink-50 to-blue-100">
          <h2 className="text-4xl text-gray-900 font-medium">Sign up</h2>
          <p className="text-sm text-gray-500/90 mt-3">
            Create your account to start tracking prices
          </p>

          <button
            onClick={signInWithGoogle}
            type="button"
            className="w-full cursor-pointer mt-8 bg-gray-500/10 flex items-center justify-center gap-2 h-12 rounded-full hover:bg-gray-200/40 transition"
          >
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
              alt="googleLogo"
              className="w-18 h-18"
            />
          </button>

          <button
            onClick={signInWithGithub}
            type="button"
            className="w-full cursor-pointer mt-3 bg-gray-500/10 flex items-center justify-center gap-2 h-12 rounded-full hover:bg-gray-200/40 transition"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="githubLogo"
              className="w-5 h-5"
            />
            <span className="text-gray-700 text-sm font-medium">
              Sign up with GitHub
            </span>
          </button>

          <div className="flex items-center gap-4 w-full my-5">
            <div className="w-full h-px bg-gray-300/90"></div>
            <p className="w-full text-nowrap text-sm text-gray-500/90">
              or sign up with email
            </p>
            <div className="w-full h-px bg-gray-300/90"></div>
          </div>

          <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2 mt-2">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
            />
          </div>

          <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2 mt-4">
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
                fill="#6B7280"
              />
            </svg>
            <input
              type="email"
              placeholder="Email id"
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
            />
          </div>

          <div className="flex items-center mt-4 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <svg
              width="13"
              height="17"
              viewBox="0 0 13 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z"
                fill="#6B7280"
              />
            </svg>
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
            />
          </div>

          <div className="w-full flex items-center mt-4 text-gray-500/80">
            <input className="h-5 mr-2" type="checkbox" id="terms" />
            <label className="text-sm" htmlFor="terms">
              I agree to the <a className="underline" href="#">Terms & Conditions</a>
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity"
          >
            Sign Up
          </button>

          <p className="text-gray-500/90 text-sm mt-4">
            Already have an account?{" "}
            <Link className="text-indigo-400 hover:underline" to={"/signin"}>
              Sign in
            </Link>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
}
