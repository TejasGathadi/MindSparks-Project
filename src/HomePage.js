import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ContactUs from "./components/ContactUs";
import "./index.css";

export default function HomePage() {
  return (
    <>
      <BrowserRouter>
        <div className="app-container">
          <ContactUs />
          <Header />
          <Routes>
            <Route element={<LandingPage />} path="/" />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
