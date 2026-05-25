import React, { useState } from "react";
import LoginModal from "../components/LoginModal";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { Coins } from "lucide-react";
import axios from "axios";
import { setUserData } from "../src/redux/userSlice";
import { serverUrl } from "../src/App";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const highlights = [
    "AI-Powered Code Generation",
    "Fully Responsive",
    "Production Ready Output",
  ];

  const [openLogin, setOpenLogin] = useState(false);
  const { userData } = useSelector((state) => state.user); // this is for accessing the user data from the Redux store. It uses the useSelector hook to select the userData property from the user slice of the state. This allows the Home component to access the current user's information and potentially display it or use it for conditional rendering based on whether the user is logged in or not.
  const [openProfile, setOpenProfile] = useState(false);
  const dispatch = useDispatch(); //it function was to dispatch actions to the Redux store.
  const [websites, setWebsites] = useState(null);
  const navigate = useNavigate(); // this is a hook from the react-router-dom library that allows you to programmatically navigate to different routes in your application. In this code, it is used to navigate the user to the dashboard page when they click on the "Dashboard" button in the profile dropdown menu.
  // the above line used purpose was to navigate the user to the dashboard page when they click on the "Dashboard" button in the profile dropdown menu. It uses the navigate function to change the route to "/dashboard", which is defined in the App component's routing configuration. This allows for seamless navigation within the application without needing to refresh the page.
  const handleLogout = async () => {
    try {
      await axios.get(`${serverUrl}/api/auth/logout`, {
        withCredentials: true,
      });
      dispatch(setUserData(null));
      setOpenProfile(false);
      // After logging out, you might want to clear the user data from the Redux store or redirect the user to a different page.
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
  const query = new URLSearchParams(window.location.search);

  if (query.get("payment") === "success") {
    window.location.reload();
  }
}, []);
  useEffect(() => {
    if (!userData) {
      return;
    }
    const handleGetAllWebsites = async () => {
      try {
        const result = await axios.get(`${serverUrl}/api/website/get-all`, {
          withCredentials: true,
        });
        setWebsites(result.data || []);
        console.log(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleGetAllWebsites();
  }, [userData]);
  return (
    <div className="relative min-h-screen bg-[#040404] text-white overflow-hidden">
      {/* Navbar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-lg font-semibold">GenWeb.ai</div>

          <div className="flex items-center gap-5">
            <div
              className="hidden md:inline text-sm text-zinc-400 hover:text-white cursor-pointer transition"
              onClick={() => navigate("/pricing")}
            >
              Pricing
            </div>
            {userData && (
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm cursor-pointer hover:bg-white/10 transition">
                <Coins size={14} className="text-yellow-50" />
                <span
                  className="text-zinc-300"
                  onClick={() => navigate("/pricing")}
                >
                  Credits
                </span>
                <span>{userData.credits}</span>
                <span
                  className="font-semibold"
                  onClick={() => navigate("/pricing")}
                >
                  +
                </span>
              </div>
            )}
            {!userData ? (
              <button
                className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 text-sm"
                onClick={() => setOpenLogin(true)}
              >
                Get Started
              </button>
            ) : (
              <div className="relative">
                <button
                  className="flex items-center"
                  onClick={() => setOpenProfile(!openProfile)}
                >
                  <img
                    src={
                      userData.avatar ||
                      `https://ui-avatars.com/api/?name=${userData?.name}`
                    }
                    referrerPolicy="no-referrer"
                    alt="avatar"
                    className="w-9 h-9 rounded-full border border-white/20 object-cover"
                  ></img>
                </button>
                <AnimatePresence>
                  {openProfile && (
                    <>
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        className="absolute right-0 mt-3 w-60 z-50 bg-[#040404] border border-white/10 rounded-xl shadow-2xl overflow-hidden p-4 text-sm"
                      >
                        <div className="font-semibold px-4 py-3 border-b border-white/10">
                          <p className="text-sm font-medium truncate">
                            {userData.email}
                          </p>
                          <p className="text-xs text-zinc-500 truncate">
                            {userData.name}
                          </p>
                        </div>
                        <button className="md:hidden w-full px-4 py-3 flex items-center gap-2 text-sm border-b border-white/10 hover:bg-white/5">
                          <Coins size={14} className="text-yellow-500" />
                          <span className="text-zinc-300">Credits</span>
                          <span>{userData.credits}</span>
                          <span className="font-semibold">+</span>
                        </button>
                        <button
                          className="w-full px-4 py-3 text-left text-sm hover:bg-white/5"
                          onClick={() => navigate("/dashboard")}
                        >
                          DashBoard
                        </button>
                        <button
                          onClick={handleLogout}
                          className="w-full px-4 py-3 text-left text-sm text-red-500 hover:bg-white/5"
                        >
                          Logout
                        </button>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="pt-44 pb-32 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          Build Stunning Websites <br />
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            With AI
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 text-lg text-zinc-400 max-w-xl mx-auto"
        >
          Describe your website and let our AI create it for you in seconds. No
          coding required.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button
            onClick={() =>
              userData ? navigate("/dashboard") : setOpenLogin(true)
            }
            className="px-10 py-4 rounded-xl bg-white text-black font-semibold hover:scale-105 mt-12 transition duration-300"
          >
            {userData ? "Go to Dashboard" : "Get Started"}
          </button>
        </motion.div>
      </section>
      {!userData && (
        <section className="max-w-7xl mx-auto px-6 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="rounded-2xl bg-white/5 border border-white/10 p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
              >
                <h1 className="text-xl font-semibold mb-4">{highlight}</h1>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  GenWeb.ai builds real websites with clean code, smooth
                  animations, responsive layouts, and scalable architecture.
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      )}
      {/* Highlights */}

      {userData && websites?.length > 0 && (
        <section className=" max-w-7xl mx-auto px-6 pb-32">
          <h3 className="text-2xl font-semibold mb-6">Your Websites</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {websites.slice(0, 3).map((w, i) => (
              <motion.div
                key={w._id}
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate(`/editor/${w._id}`)}
                className="cursor-pointer rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
              >
                <div className="h-40 bg-black">
                  {" "}
                  <iframe
                    srcDoc={w.latestCode}
                    className="w-[140%] h-[140%] scale-[0.72] origin-top-left pointer-events-none bg-white"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold line-clamp-2">
                    {w.title}
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Last Updated {""}
                    {new Date(w.updatedAt).toLocaleDateString()}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-zinc-500 text-sm">
        &copy; {new Date().getFullYear()} GenWeb.ai. All rights reserved.
      </footer>

      {/* Login Modal */}
      <LoginModal open={openLogin} onClose={() => setOpenLogin(false)} />
    </div>
  );
};

export default Home;
