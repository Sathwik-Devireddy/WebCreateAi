import React from "react";
import { AnimatePresence } from "framer-motion";
import google_icon from "../src/assets/google_icon.png";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { serverUrl } from "../src/App";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserData } from "../src/redux/userSlice";
const LoginModal = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const handleGoogleAuth = async () => {
    try {
      const result = await signInWithPopup(auth, provider); // this line initiates the Google Sign-In process using Firebase Authentication. It opens a popup window where the user can select their Google account and grant permission for authentication.
      const { data } = await axios.post(
        `${serverUrl}/api/auth/google`,
        {
          name: result.user.displayName,
          email: result.user.email,
          avatar: result.user.photoURL,
        },
        { withCredentials: true },
      );
      dispatch(setUserData(data.user)); // when logged in another browser and the user refreshes this line dispatches an action to update the user data in the Redux store with the information received from the server after successful authentication. The setUserData action is likely defined in a Redux slice or reducer to handle updating the user state in the application.
      onClose();
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-xl px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => onClose()}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 60 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="relative w-full max-w-md p-[1px] rounded-3xl bg-gradient-to-br from-purple-500/40 via-blue-500/30 to-transparent"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
            >
              <div className="relative border border-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.8)] overflow-hidden bg-[#040404] rounded-3xl p-8">
                <motion.div
                  animate={{ opacity: [0.25, 0.4, 0.25] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute -top-32 -left-32  w-80 h-80 bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-transparent"
                />
                <motion.div
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                  className="absolute -bottom-32 -right-32  w-80 h-80 bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-transparent"
                />
                <button
                  className="absolute top-5 right-5 z-20 text-zinc-400 hover:text-white transition text-lg"
                  onClick={() => onClose()}
                >
                  X
                </button>
                <div className="relative px-8 pt-14 pb-10 text-center">
                  <h1 className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300 ">
                    Ai-Powered Code Generation
                  </h1>
                  <h2 className="text-3xl font-semibold leading-tight mb-3 space-x-2">
                    <span>Welcome to</span>{" "}
                    <span className="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      GenWeb.ai
                    </span>
                  </h2>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="group relative w-full h-13 rounded-xl bg-white text-black font-semibold shadow-xl overflow-hidden"
                    onClick={handleGoogleAuth}
                  >
                    <div className="relative flex items-center justify-center gap-3">
                      <img
                        src={google_icon}
                        alt="google"
                        className="h-10 w-10"
                      />
                      Continue With Google{" "}
                    </div>
                  </motion.button>
                  <div className="flex items-center gap-4 my-10">
                    <div className="h-px flex-1 bg-white/10">
                      <span className="text-xs text-zinc-500 tracking-wide">
                        Secure Login
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    By continuing, you agree to our{" "}
                    <span className="underline cursor-pointer ">
                      Terms of Service
                    </span>{" "}
                    and{" "}
                    <span className="underline cursor-pointer">
                      Privacy Policy
                    </span>
                    .
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LoginModal;
// this file defines the LoginModal component, which is a modal dialog that
// allows users to log in using their Google account. It uses Firebase Authentication
//  for Google Sign-In and sends the user's information to the server for authentication.
//  The modal includes animations using Framer Motion and is styled with Tailwind CSS.
