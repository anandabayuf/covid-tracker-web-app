import MainPage from "./pages/Main-Page";
import { render } from "react-dom";
import App from './App';
//import NavBar from "./components/Nav-Bar";
//import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />}>
        {/* Tolong review mas. <Route index element={<About />}>
          </Route>*/}
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

export default App;

