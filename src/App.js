import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Favorites from "./pages/favorites";
import Details from "./pages/details";
import bgImage from "./assets/food-banner.jpg";

function App() {
  return (
    <div className="min-h-screen w-full bg-cover bg-center" style={{backgroundImage: `url(${bgImage})`}}>
      <div className="min-h-screen p-6 bg-black/80 text-gray-100 text-lg">        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
