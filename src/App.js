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
<<<<<<< HEAD
    <div>
<<<<<<< HEAD
      <Navigasi />
=======
      <NavBar />
>>>>>>> 0c8887d95eed46b908890cfeae326406030ec862
      <MainPage />
    </div>
  );
=======
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
>>>>>>> 843bfd2b56539d1db337cab8ed962fc3fecdd91c
}

export default App;

