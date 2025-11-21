import { useState } from 'react';

// Import all images
import batter from '../assets/batter-in-pans.jpg'
import cartoon from '../assets/cartoon-cake.png'
import finished from '../assets/finished-cake.jpeg'
import '../App.css'

export default function Gallery() {
    // Store images, titles, and descriptions
    const images = [
        { src: batter, title: 'Batter in Pans', desc: 'Cake batter ready to bake.' },
        { src: cartoon, title: 'Cartoon Cake', desc: 'A fun illustration of a finished cake.' },
        { src: finished, title: 'Finished Cake', desc: 'The final baked cake, ready to enjoy.' },
        // { src: greased, title: 'Greased Pans', desc: 'Preparing the pans for the cake.' },
        // { src: boiling, title: 'Boiling Chocolate', desc: 'Preparing the chocolate mixture.' },
        // { src: liquid, title: 'Melted Chocolate', desc: 'Melted chocolate mixture ready for the batter.' },
        // { src: doneCake, title: 'Done Cake', desc: 'The cake is now finished and cooling.' },
        // { src: frosting, title: 'Frosting', desc: 'Mixing the frosting for the cake.' }
    ];

    const [index, setIndex] = useState(0);

    const nextImage = () => setIndex((index + 1) % images.length);
    const prevImage = () => setIndex((index - 1 + images.length) % images.length);

    return (
        <div className="page-container gallery-page">
            <h1>My Cake Gallery</h1>
            <div className="image-container">
                <img
                    src={images[index].src}
                    alt={images[index].title}
                    className="gallery-image"
                />
                <p className="gallery-title">{images[index].title}</p>
                <p className="gallery-desc">{images[index].desc}</p>
                <div className="controls">
                    <button className="gallery-btn" onClick={prevImage}>Previous</button>
                    <button className="gallery-btn" onClick={nextImage}>Next</button>
                </div>
            </div>
        </div>
    );
}
