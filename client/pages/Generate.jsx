import React, { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import serverUrl from "../src/config/config.js";
const phases = [
  "Pondering...",
  "Analyzing...",
  "Processing...",
  "Adding...",
  "Finalizing...",
];
const Generate = () => {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [phaseIndex, setPhaseIndex] = useState(0); // Index of the current phase
  const [error, setError] = useState("");
  //in this below code it contains the logic to generate the website
  const handleGeneratewebsite = async () => {
    setLoading(true);
    try {
      const result = await axios.post(
        `${serverUrl}/api/website/generate`,
        { prompt },
        {
          withCredentials: true,
        },
      );
      console.log(result.data);
      setPhaseIndex(0);
      setProgress(0);
      setLoading(false);
      navigate(`/editor/${result.data.websiteId}`);
    } catch (error) {
      setLoading(false);
      setError(error.response?.data?.message || "Something went wrong");
      console.error("Error generating website:", error);
    }
  };
  useEffect(() => {
    // Function to update the progress and phase
    if (!loading) {
      return;
    }
    let value = 0;
    let phase = 0;
    const interval = setInterval(() => {
      // Interval to update the progress and phase
      const increment =
        value < 20
          ? Math.random() * 1.5
          : value < 60
            ? Math.random() * 1.2
            : Math.random() * 0.6;
      value += increment;
      if (value >= 93) value = 93;
      ((phase = Math.min(Math.floor((value / 100) * phases.length))),
        phases.length - 1);
      setProgress(Math.floor(value));
      setPhaseIndex(phase);
    }, 1200);
    return () => clearInterval(interval);
  }, [loading]);
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
                onChange={(e) => setPrompt(e.target.value)}
                value={prompt}
                name=""
                id=""
                className="w-full h-56 p-6 rounded-3xl bg-black/60 border border-white/40 outline-none resize-none text-sm leading-relaxed focus:ring-2 focus:ring-white/20 "
                placeholder="describe your project in detail..."
              ></textarea>
            </div>
            {error && <p className="mt-4 text-sm text-red-400">{error}</p>}
          </div>
          <div className="flex items-center gap-4 justify-center">
            <motion.button
              onClick={handleGeneratewebsite}
              disabled={!prompt.trim() || loading}
              className={`px-4 py-2 rounded-lg bg-white text-black text-sm font-semibold hover:scale-105 transition ${prompt.trim() && !loading ? "bg-white text-black" : "bg-white/10 text-zinc-400 cursor-not-allowed"}`}
            >
              Initiate
            </motion.button>
          </div>
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-xl mx-auto mt-12"
            >
              <div className="flex justify-between mb-2 text-xs text-zinc-400">
                <span className="">{phases[phaseIndex]}</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full h-2 bg-zinc-700 rounded-full overflow-hidden">
                <motion.div
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.8 }}
                  className="h-full bg-gradient-to-r from-white to-zinc-400"
                ></motion.div>
                <div className="text-center text-xs text-zinc-400 mt-4">
                  Estimated time remaining:{""}
                  <span className="text-white font-medium">~8-12 minutes</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default Generate;
