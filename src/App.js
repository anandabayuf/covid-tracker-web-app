import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/Main-Page";
import NavBar from "./components/Nav-Bar";
import Footer from "./components/Footer";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />}>
          {/* Tolong review mas. <Route index element={<About />}>
            </Route>*/}
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
        <Route path="About" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
