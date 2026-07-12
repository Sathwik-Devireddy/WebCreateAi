import { ArrowLeftCircleIcon, Coins } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import serverUrl from "../src/config/config.js";
import axios from "axios";

const plans = [
  {
    key: "free",
    name: "Free",
    price: "₹0",
    credits: 100,
    description: "Perfect to explore GenWeb.ai and test AI website creation",
    features: [
      "AI website generation",
      "Responsive HTML output",
      "Basic animations",
      "Community templates",
    ],
    popular: false,
    button: "Get Started",
  },
  {
    key: "pro",
    name: "Pro",
    price: "$49",
    credits: 500,
    description: "Built for freelancers, creators, and startup founders",
    features: [
      "Advanced AI website generation",
      "Premium responsive layouts",
      "Modern animations & effects",
      "Faster generation speed",
      "Priority support",
    ],
    popular: true,
    button: "Upgrade to Pro",
  },
  {
    key: "enterprise",
    name: "Enterprise",
    price: "$149",
    credits: 2500,
    description: "Best for agencies and businesses building at scale",
    features: [
      "Unlimited premium templates",
      "Team collaboration",
      "Custom branding support",
      "High-speed AI generation",
      "Dedicated priority assistance",
      "Commercial usage rights",
    ],
    popular: false,
    button: "Contact Sales",
  },
];
const Pricing = () => {
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.user);
  const [loading, setloading] = React.useState("");
  const handleBuy = async (planKey) => {
    if (!userData) {
      navigate("/");
      return;
    }
    if (planKey === "free") {
      navigate("/dashboard");
      return;
    }
    setloading(planKey);
    try {
      const result = await axios.post(
        `${serverUrl}/api/billing`,
        { planType: planKey },
        { withCredentials: true },
      );
      window.location.assign(result.data.sessionUrl);
    } catch (error) {
      console.log(error);
      setloading("");
    }
  };
  return (
    <div>
      <div className="relative min-h-screen overflow-hidden bg-[#050505] text-white px-6 pt-16 pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]" />
        </div>
        <button className="relative z-10 mb-8 flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition">
          <ArrowLeftCircleIcon size={14} onClick={() => navigate("/")} />
          Back
        </button>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-4xl mx-auto text-center mb-14"
        >
          <h1>Simple,transparent pricing</h1>
          <p className="text-zinc-400 text-lg">
            Buy Credits once.Build anytime.
          </p>
        </motion.div>
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -14, scale: 1.03 }}
              className={`relative rounded-3xl p-8 border backdrop-blur-xl transition-all ${plan.popular ? "border-indigo-500 bg-gradient-to-b from-indigo-500/20 to-transparent shadow-2xl shadow-indigo-500/30" : "border-white/10 bg-white/5 hover:border-indigo-400 hover:bg-white/10"}`}
            >
              {plan.popular && (
                <span className="absolute top-5 right-5 px-3 py-1 text-xs rounded-full bg-indigo-500">
                  Most Popular
                </span>
              )}
              <h2 className="text-xl font-semibold mb-4">{plan.name}</h2>
              <p className="text-zinc-400 text-sm mb-6">{plan.description}</p>
              <div className="flex items-end gap-1 mb-4">
                <span>{plan.price}</span>{" "}
                <span className="text-zinc-400">/one-time</span>
              </div>
              <div className="flex items-center gap-2 mb-8">
                <Coins size={16} className="text-yellow-500" />
                <span>{plan.credits} Credits</span>
              </div>
              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 mb-4">
                    <span className="text-zinc-400">•</span>{" "}
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>{" "}
              <motion.button
                whileTap={{ scale: 0.96 }}
                disabled={loading === plan.key}
                onClick={() => handleBuy(plan.key)}
                className={`w-full rounded-lg py-2 text-white font-semibold mt-4 transition-all disabled:opacity-60 ${
                  plan.popular
                    ? "bg-indigo-500 hover:bg-indigo-600"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                {loading === plan.key ? "Loading..." : plan.button}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
