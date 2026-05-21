import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import serverUrl from "../src/config/config.js";

const LiveSite = () => {
  const { id } = useParams();
  const [html, setHtml] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    const handleGetWebsite = async () => {
      // this function is responsible for fetching the website data from the server using the provided ID. It makes an API call to the server to retrieve the website details, including the latest code and conversation history. If the request is successful, it updates the website state with the retrieved data. If there is an error during the fetch operation, it sets an error message in the state to be displayed to the user.
      try {
        const result = await axios.get(
          `${serverUrl}/api/website/get-by-slug/${id}`,
          {
            withCredentials: true,
          },
        );
        setHtml(result.data?.latestCode || "");
      } catch (error) {
        console.error("Error getting website:", error);
        setError("site not found");
      }
    };
    handleGetWebsite();
  }, [id]);
  if (error) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-red-900">
        <h1>{error}</h1>
      </div>
    );
  }
  return (
    <iframe
      title="livesite"
      srcDoc={html}
      className="w-screen h-screen border-none "
      sandbox="allow-scripts allow-same-origin allow-forms"
    />
  );
};

export default LiveSite;
