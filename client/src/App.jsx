import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import useGetCurrentUser from "../hooks/useGetCurrentUser";
export const serverUrl = "http://localhost:8000"; // this variable holds the base URL of the server, which is used for making API requests from the client application. It allows the client to communicate with the server for authentication and user-related operations.
const App = () => {
  useGetCurrentUser();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
