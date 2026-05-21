import { ArrowLeft } from "lucide-react";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import serverUrl from "../src/config/config.js";

const Dashboard = () => {
  const { userData } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [websites, setWebsites] = React.useState([]);
  const [loading, setloading] = React.useState(false);
  const [error, seterror] = React.useState("");

  useEffect(() => {
    const handleGetAllWebsites = async () => {
      try {
        setloading(true);
        const result = await axios.get(`${serverUrl}/api/website/get-all`, {
          withCredentials: true,
        });
        setWebsites(result.data || []);
        setloading(false);
        console.log(result.data);
      } catch (error) {
        console.log(error);
        seterror(error.responce.data.message);
        setloading(false);
      }
    };
    handleGetAllWebsites();
  }, []);
  return (
    <>
      <div className="min-h-screen bg-[#050505] text-white ">
        <div className="sticky top-0 z-40 backdrop-blur-xl bg-black/50 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                className="p-2 rounded-lg hover:bg-white/10 transition"
                onClick={() => navigate("/")}
              >
                <ArrowLeft size={16} />{" "}
              </button>
              <h1 className="text-lg font-semibold">DashBoard</h1>
            </div>
            <button
              onClick={() => navigate("/generate")}
              className="px-4 py-2 rounded-lg bg-white text-black text-sm font-semibold hover:scale-105 transition"
            >
              + New Project
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-10"
          >
            <p className="text-sm text-zinc-400 mb-1">Welcome Back</p>
            <h1 className="text-3xl font-bold">{userData.name}</h1>
          </motion.div>
          {loading && (
            <div className="mt-24 text-center text-zinc-400">
              Loading Your Websites.....
            </div>
          )}
          {error && !loading && (
            <div className="mt-24 text-center text-red-500">{error}</div>
          )}
          {websites.length == 0 && (
            <div className="mt-24 text-center text-indigo-600">
              {" "}
              You have not created any websites.
            </div>
          )}
          {!loading && !error && websites?.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {websites.map((w, i) => (
                <motion.div
                  className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition flex flex-col"
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="relative h-40 bg-black cursor-pointer">
                    <iframe
                      srcDoc={w.latestCode}
                      className="absolute inset-0 w-[140%] h-[140%] scale-[0.72] origin-top-left pointer-events-none bg-white"
                    ></iframe>
                    <div className="absolute inset-0 bg-black/30 " />
                  </div>
                  <div className="p-5 flex flex-col gap-4 flex-1">
                    <h3>{w.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
