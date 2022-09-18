import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainPage from "./pages/Main-Page";
import NavBar from "./components/Nav-Bar";



function App(){
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />}>
          {/* Tolong review mas. <Route index element={<About />}>
            </Route>*/}
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

