import React, { useState } from "react";
import LoginModal from "../components/LoginModal";
import { motion } from "framer-motion";

const Home = () => {
  const highlights = [
    "AI-Powered Code Generation",
    "Fully Responsive",
    "Production Ready Output",
  ];

  const [openLogin, setOpenLogin] = useState(false);

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
            <div className="hidden md:inline text-sm text-zinc-400 hover:text-white cursor-pointer transition">
              Pricing
            </div>

            <button
              onClick={() => setOpenLogin(true)}
              className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 text-sm transition"
            >
              Get Started
            </button>
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
            onClick={() => setOpenLogin(true)}
            className="px-10 py-4 rounded-xl bg-white text-black font-semibold hover:scale-105 mt-12 transition duration-300"
          >
            Get Started
          </button>
        </motion.div>
      </section>

      {/* Highlights */}
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
