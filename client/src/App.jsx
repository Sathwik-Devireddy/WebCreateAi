import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import useGetCurrentUser from "../hooks/useGetCurrentUser";
import { useSelector } from "react-redux";
import Dashboard from "../pages/Dashboard";
import Generate from "../pages/Generate";
export const serverUrl = "http://localhost:8000"; // this variable holds the base URL of the server, which is used for making API requests from the client application. It allows the client to communicate with the server for authentication and user-related operations.
const App = () => {
  useGetCurrentUser();
  const { userData } = useSelector((state) => state.user);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/dashboard"
            element={userData ? <Dashboard /> : <Navigate to={"/"} />}
          ></Route>
          <Route
            path="/generate"
            element={userData ? <Generate /> : <Navigate to={"/"} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
