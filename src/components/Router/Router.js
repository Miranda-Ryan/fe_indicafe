import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";

const Router = () => {
  const deployRoutes = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );

  return <>{deployRoutes()}</>;
};

export default Router;
