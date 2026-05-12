import axios from "axios";
import React, { useEffect } from "react";
import { serverUrl } from "../src/App";
function useGetCurrentUser() {
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const result = await axios.get(`${serverUrl}/api/user/me`, {
          withCredentials: true,
        });
        console.log("Current user:", result.data);
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };
    getCurrentUser();
  }, []);
}

export default useGetCurrentUser;
