import axios from "axios";
import React, { useEffect } from "react";
import { serverUrl } from "../src/App";
function useGetCurrentUser() {
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        //the path below is the endpoint defined in the user.routes.js file for getting the current user's details.
        // The withCredentials option is set to true to include the authentication token stored in the cookie with the request,
        //  allowing the server to identify and authenticate the user.
        const result = await axios.get(`${serverUrl}/api/user/me`, {
          withCredentials: true,
        }); // this line sends a GET request to the server to fetch the current user
        console.log("Current user:", result);
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };
    getCurrentUser();
  }, []);
}

export default useGetCurrentUser;
//this file defines a custom React hook called useGetCurrentUser, which is used to fetch the current user's
// details from the server when the component mounts. It sends a GET request to the server's /api/user/me endpoint,
//  including the authentication token in the request. If the request is successful, it logs the current user's
// information to the console. If there is an error during the fetch process, it logs the error message to the console.
