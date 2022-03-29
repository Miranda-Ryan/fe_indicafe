import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Catalog from "../Catalog/Catalog";

const Router = () => {
  const deployRoutes = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  );

  return <>{deployRoutes()}</>;
};

export default Router;
