import React from "react";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Generate = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-[#050505] via-[#18181b] to-[#050505] text-white">
        <div className="sticky top-0 z-40 backdrop-blur-xl bg-black/50 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                className="p-2 rounded-lg hover:bg-white/10 transition"
                onClick={() => navigate("/")}
              >
                <ArrowLeft size={16} />{" "}
              </button>
              <h1 className="text-lg font-semibold">
                GenWeb.<span className="text-purple-500">AI</span>
              </h1>
            </div>
          </div>
        </div>{" "}
        <div className="max-w-6xl mx-auto px-6 py-16 ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Build Websites With{" "}
              <span className="block bg-linear-to-r from-white to-yellow-700 bg-clip-text  text-transparent">
                AI Power
              </span>
            </h1>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              {" "}
              Process May Take Several Minutes.GenWeb.Ai focuses on quality,
              speed, and affordability.{" "}
            </p>
          </motion.div>
          <div className="mb-14">
            <h1 className="text-xl font-semibold mb-2">
              Describe Your Project
            </h1>
            <div className="relative">
              <textarea
                name=""
                id=""
                className="w-full h-56 p-6 rounded-3xl bg-black/60 border border-white/10 outline-none resize-none text-sm leading-relaxed focus-ring-2 focus-ring-white/20 "
                placeholder="describe your project in detail..."
              ></textarea>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center">
            <motion.div className="px-4 py-2 rounded-lg bg-white text-black text-sm font-semibold hover:scale-105 transition">
              Initiate
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Generate;
