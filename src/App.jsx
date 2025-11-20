import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Gallery from "./Pages/Gallery.jsx";
import About from "./Pages/About.jsx";
import Behind from "./Pages/Behind.jsx";

export default function App() {
    return (
        <BrowserRouter basename="/reactSite">
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/about">About</Link>
                    <Link to="/behind">Behind the Scenes</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/behind" element={<Behind />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

