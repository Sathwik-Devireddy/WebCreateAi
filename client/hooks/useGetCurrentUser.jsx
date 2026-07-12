import axios from "axios";
import React, { useEffect } from "react";
import { serverUrl } from "../src/App";
import { useDispatch } from "react-redux";
import { setUserData } from "../src/redux/userSlice";
function useGetCurrentUser() {
  const dispatch = useDispatch(); // this line initializes the dispatch function from the Redux store, allowing the hook to
  // dispatch actions to update the user data in the Redux state when the current user's information is successfully fetched from the server.
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        //the path below is the endpoint defined in the user.routes.js file for getting the current user's details.
        // The withCredentials option is set to true to include the authentication token stored in the cookie with the request,
        //  allowing the server to identify and authenticate the user.
        const result = await axios.get(`${serverUrl}/api/user/me`, {
          withCredentials: true, //when this used is true it allows the server to identify and authenticate the user
        });

        // this line sends a GET request to the server to fetch the current user

        dispatch(setUserData(result.data)); // this line dispatches an action to update the Redux state with the fetched user data, allowing other components in the application to access the current user's information.
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };
    getCurrentUser();
  }, [dispatch]);
}

export default useGetCurrentUser;
//this file defines a custom React hook called useGetCurrentUser, which is used to fetch the current user's
// details from the server when the component mounts. It sends a GET request to the server's /api/user/me endpoint,
//  including the authentication token in the request. If the request is successful, it logs the current user's
// information to the console. If there is an error during the fetch process, it logs the error message to the console.
