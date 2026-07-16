import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import useGetCurrentUser from '../hooks/useGetCurrentUser';
import { useSelector } from 'react-redux';
import Dashboard from '../pages/Dashboard';
import Generate from '../pages/Generate';
import WebsiteEditor from '../pages/Editor';
import LiveSite from '../pages/LiveSite';
import Pricing from '../pages/Pricing';
export const serverUrl = import.meta.env.VITE_API_URL; // this variable holds the base URL of the server, which is used for making API requests from the client application. It allows the client to communicate with the server for authentication and user-related operations.
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
            element={userData ? <Dashboard /> : <Home />}
          ></Route>
          <Route
            path="/generate"
            element={userData ? <Generate /> : <Home />}
          ></Route>
          <Route
            path="/editor/:id"
            element={userData ? <WebsiteEditor /> : <Home />}
          ></Route>
          <Route path="/site/:id" element={<LiveSite />}></Route>
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
