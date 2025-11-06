import { useState } from 'react'
import './App.css'
import batter from './assets/batter-in-pans.JPG'
import cartoon from './assets/cartoon-cake.png'
import finished from './assets/finished-cake.jpeg'

function App() {
    const images = [
        { src: batter, title: 'Batter in Pans', desc: 'Cake batter ready to bake.' },
        { src: cartoon, title: 'Cartoon Cake', desc: 'A fun illustration of a finished cake.' },
        { src: finished, title: 'Finished Cake', desc: 'The final baked cake, ready to enjoy.' }
    ]

    const [index, setIndex] = useState(0)
    const [likes, setLikes] = useState(0)

    const nextImage = () => setIndex((index + 1) % images.length)
    const prevImage = () => setIndex((index - 1 + images.length) % images.length)

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>My React Cake Gallery</h1>

            <img
                src={images[index].src}
                alt={images[index].title}
                width="300"
                style={{
                    borderRadius: '20px',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                    marginBottom: '20px'
                }}
            />

            <h2>{images[index].title}</h2>
            <p style={{ color: '#555' }}>{images[index].desc}</p>

            <div>
                <button onClick={prevImage}>Previous</button>
                <button onClick={nextImage}>Next</button>
            </div>

            <div style={{ marginTop: '20px' }}>
                <button
                    onClick={() => setLikes(likes + 1)}
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        backgroundColor: '#f5a9b8',
                        border: 'none',
                        marginRight: '10px'
                    }}
                >
                    Like
                </button>
                <span style={{ fontSize: '18px' }}>Likes: {likes}</span>
            </div>
        </div>
    )
}

export default App

