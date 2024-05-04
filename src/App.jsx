import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyHome from "./components/Home";
import MyCityPage from "./components/CityPage";
import NotFound from "./components/NotFoundPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyHome />} />
          <Route path="/home/:cityName" element={<MyCityPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
