import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import serverUrl from "../src/config/config.js";
import { useState } from "react";
import {
  Code2,
  MessageCircle,
  MessageSquare,
  Monitor,
  Rocket,
  X,
} from "lucide-react";
import { useRef } from "react";
import Loader from "../components/Loader.jsx";
import Button from "../components/Button.jsx";
import { AnimatePresence, motion } from "framer-motion";
import Editor from "@monaco-editor/react";
const WebsiteEditor = () => {
  const { id } = useParams();
  const [website, setwebsite] = useState(null);
  const [error, seterror] = useState("");
  const [prompt, setPrompt] = useState(""); //prompt for ai
  const iframeRef = React.useRef(null);
  const [code, setCode] = useState("<h1>Loading...</h1>"); // latest code
  const [messages, setMessages] = useState([]); // Conversation history
  const [updateLoading, setUpdateLoading] = useState(false); // loading state
  const [thinkingIndex, setThinkingIndex] = useState(0); // index of the current thinking step
  const [showCode, setShowCode] = useState(false);
  const [showFullPreview, setShowFullPreview] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const thinkingSteps = [
    "Pondering...",
    "Analyzing...",
    "Processing...",
    "Deciding...",
    "Computing...",
  ];
  const handleUpdate = async () => {
    if (!prompt) return;

    setUpdateLoading(true);
    const text = prompt;
    setPrompt("");
    setMessages((m) => [...m, { role: "user", content: prompt }]);
    try {
      const result = await axios.post(
        `${serverUrl}/api/website/update/${id}`,
        { prompt: text },
        {
          withCredentials: true,
        },
      );
      setUpdateLoading(false);
      setMessages((m) => [...m, { role: "ai", content: result.data.message }]);
      setCode(result.data.code);
    } catch (error) {
      setUpdateLoading(false);
      console.error("Error updating website:", error);
    }
  };
  useEffect(() => {
    if (!updateLoading) return;
    const i = setInterval(() => {
      setThinkingIndex((prevIndex) => (prevIndex + 1) % thinkingSteps.length);
    }, 1200);
    return () => {
      clearInterval(i);
    };
  }, [updateLoading]);
  useEffect(() => {
    const handleGetWebsite = async () => {
      // this function is responsible for fetching the website data from the server using the provided ID. It makes an API call to the server to retrieve the website details, including the latest code and conversation history. If the request is successful, it updates the website state with the retrieved data. If there is an error during the fetch operation, it sets an error message in the state to be displayed to the user.
      try {
        const result = await axios.get(
          `${serverUrl}/api/website/get-by-id/${id}`,
          {
            withCredentials: true,
          },
        );
        setwebsite(result.data); // Update the website state with the retrieved data
        setCode(result.data?.latestCode || "");
        setMessages(result.data?.conversation || []);
      } catch (error) {
        console.error("Error getting website:", error);
        seterror(
          error.response?.data?.message ||
            "An error occurred while fetching the website.",
        );
      }
    };
    handleGetWebsite();
  }, [id]);
  useEffect(() => {
    // this effect runs whenever the website state changes. It checks if the iframe reference and the latest code from the website are available. If they are, it creates a new Blob object containing the latest code, which is of type "text/html". This Blob can then be used to create a URL that can be set as the source of the iframe to display the generated website.
    if (!iframeRef.current || !code) return;
    const blob = new Blob([code], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    iframeRef.current.src = url;
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [code]);

  if (error) {
    return (
      <div className="text-red-500 h-screen flex justify-center items-center bg-gray-500">
        {error}
      </div>
    );
  }
  if (!website) {
    return (
      <div className="h-screen w-screen bg-black">
        <Loader />
      </div>
    );
  }
  return (
    <>
      <div className="h-screen w-screen flex bg-black text-white overflow-hidden">
        <aside className="hidden lg:flex w-[360px] border-r border-white/10 flex-col bg-linear-to-br from-gray-900 via-olive-900 to-slate-900">
          <Headers />
          <>
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {" "}
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={` max-w-[85%] ${m.role === "user" ? "ml-auto" : "mr-auto"}`}
                >
                  <div
                    className={`px-4 py-2 rounded-2xl text-sm leading-relaxed ${m.role === "user" ? "bg-white text-black" : "bg-white/5 border border-white/10 text-zinc-200"} `}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {updateLoading && (
                <div className="max-w-[85%] mr-auto">
                  <div className="px-4 py-2 rounded-2xl text-sm leading-relaxed bg-white/5 border border-white/10 text-zinc-200">
                    {thinkingSteps[thinkingIndex]}
                  </div>
                </div>
              )}
            </div>
            <div className="p-3 border-t border-white/10">
              <div className="flex gap-2">
                <textarea
                  rows="1"
                  onChange={(e) => setPrompt(e.target.value)}
                  value={prompt}
                  placeholder="describe changes..."
                  className="flex-1 resize-none rounded-2xl px-4 py-3 bg-white/5 border border-white/10 text-sm"
                ></textarea>
                <div
                  onClick={handleUpdate}
                  disabled={updateLoading}
                  className="px-3 py-3 rounded-lg bg-slate text-black text-sm font-semibold  transition"
                >
                  <Button />
                </div>
              </div>
            </div>
          </>
        </aside>

        <div className="flex-1 flex flex-col">
          <div className="h-14 px-4 flex justify-between items-center border-b border-white/100 bg-black/80">
            <span className="text-xs text-zinc-400">Live Preview</span>
            <div className="flex items-center gap-4">
              {" "}
              <button className="flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-sm font-semibold px-3 py-1 rounded-lg hover:bg-gradient-to-l hover:scale-105 transition">
                <Rocket size={14} />
                Deploy
              </button>
              <button
                onClick={() => setShowChat(true)}
                className="p-2 lg:hidden"
              >
                <MessageSquare size={18} />
              </button>
              <button className="p-2" onClick={() => setShowCode(true)}>
                <Code2 size={18} />
              </button>
              <button className="p-2" onClick={() => setShowFullPreview(true)}>
                <Monitor size={18} />
              </button>
            </div>
          </div>
          <iframe ref={iframeRef} className="flex-1 w-full bg-white "></iframe>
        </div>
        <AnimatePresence>
          {showChat && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed inset-0 right-0 w-full lg:w-[45%] z-[9999] bg-[#1e1e1e] flex flex-col"
            >
              <Headers onclose={() => setShowChat(false)} />
              <>
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
                  {" "}
                  {messages.map((m, i) => (
                    <div
                      key={i}
                      className={` max-w-[85%] ${m.role === "user" ? "ml-auto" : "mr-auto"}`}
                    >
                      <div
                        className={`px-4 py-2 rounded-2xl text-sm leading-relaxed ${m.role === "user" ? "bg-white text-black" : "bg-white/5 border border-white/10 text-zinc-200"} `}
                      >
                        {m.content}
                      </div>
                    </div>
                  ))}
                  {updateLoading && (
                    <div className="max-w-[85%] mr-auto">
                      <div className="px-4 py-2 rounded-2xl text-sm leading-relaxed bg-white/5 border border-white/10 text-zinc-200">
                        {thinkingSteps[thinkingIndex]}
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-3 border-t border-white/10">
                  <div className="flex gap-2">
                    <textarea
                      rows="1"
                      onChange={(e) => setPrompt(e.target.value)}
                      value={prompt}
                      placeholder="describe changes..."
                      className="flex-1 resize-none rounded-2xl px-4 py-3 bg-white/5 border border-white/10 text-sm"
                    ></textarea>
                    <div
                      onClick={handleUpdate}
                      disabled={updateLoading}
                      className="px-3 py-3 rounded-lg bg-slate text-black text-sm font-semibold  transition"
                    >
                      <Button />
                    </div>
                  </div>
                </div>
              </>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showCode && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0" }}
              exit={{ x: "100%" }}
              className="fixed inset-y-0 right-0 w-full lg:w-[45%] z-[9999] bg-[#1e1e1e] flex flex-col"
            >
              <div className="h-12 px-4 flex justify-between items-center border-b border-white/10 bg-[#1e1e1e]">
                <span className="text-sm font-medium">index.html</span>
                <button onClick={() => setShowCode(false)}>
                  <X size={16} />
                </button>
              </div>
              <Editor
                theme="vs-dark"
                height="100%"
                value={code}
                language="html"
                onChange={(v) => setCode(v)}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showFullPreview && (
            <motion.div className="fixed inset-0 z-[9999] bg-black">
              <iframe className="w-full h-full bg-white" srcDoc={code} />
              <button
                onClick={() => setShowFullPreview(false)}
                className="absolute top-4 right-4 p-2 bg-black/70 rounded-lg"
              >
                <X />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
  function Headers({ onclose }) {
    return (
      <>
        <div className="h-14 px-4 flex items-center justify-between border-b border-white/10">
          <span className="font-semibold truncate">{website.title}</span>
          {onclose && (
            <button onClick={onclose} className="lg:hidden " color="white">
              <X size={18} />
            </button>
          )}
        </div>
      </>
    );
  }
};

export default WebsiteEditor;
