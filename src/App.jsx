
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Gallery from "./Pages/Gallery.jsx";
import About from "./Pages/About.jsx";
import Behind from "./Pages/Behind.jsx";
import Recipe from "./Pages/Recipe.jsx";   
import "./App.css";

export default function App() {
    return (
        <BrowserRouter basename="/reactSite">
            <div className="app-root">
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/about">About</Link>
                    <Link to="/recipe">Recipe</Link> {/* NEW LINK */}
                    <Link to="/behind">Behind the Scenes</Link>
                </nav>

                <div className="page-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/recipe" element={<Recipe />} /> {/* NEW ROUTE */}
                        <Route path="/behind" element={<Behind />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


