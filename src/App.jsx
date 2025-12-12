
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Gallery from "./Pages/Gallery.jsx";
import About from "./Pages/About.jsx";
import Behind from "./Pages/Behind.jsx";
import Recipe from "./Pages/Recipe.jsx";
import People from "./Pages/People.jsx";
import Footer from "./Pages/footer.jsx";
import "./App.css";

export default function App() {
    return (
        <BrowserRouter basename="/reactCake">
            <div className="app-root">
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/about">About</Link>
                    <Link to="/people">People</Link>
                    <Link to="/recipe">Recipe</Link>
                    <Link to="/behind">Behind the Scenes</Link>
                </nav>

                <div className="page-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/people" element={<People />} />
                        <Route path="/recipe" element={<Recipe />} />
                        <Route path="/behind" element={<Behind />} />
                    </Routes>
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    );
}


