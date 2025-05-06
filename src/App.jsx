import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Company from "./pages/Company";
import Developers from "./pages/Developers";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Header />
      <Section />

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/company" element={<Company />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/developers" element={<Developers />} />
      </Routes>
    </div>
  );
}
export default App;
