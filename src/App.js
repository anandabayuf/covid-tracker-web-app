import * as React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/Main-Page";
import NavBar from "./components/Nav-Bar";
import Footer from "./components/Footer";
import AboutPage from "./pages/About-Page";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
