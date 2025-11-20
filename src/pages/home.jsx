export default function Home() {
    return (
        <div className="page-container home-page fade-in">

            <h1 className="home-title">Welcome to My Project</h1>
            <p className="home-tagline">
                A sweet React site inspired by my Grandma’s German Chocolate Cake project.
            </p>

            {/* CAKE ANIMATION */}
            <div className="home-cake-animation">
                <div className="cake-layer layer1"></div>
                <div className="cake-layer layer2"></div>
                <div className="cake-layer layer3"></div>
                <div className="cake-frosting"></div>
                <div className="cake-cherry"></div>
            </div>

            <p className="home-message">
                Explore the gallery, learn about the project, or check out behind-the-scenes details!
            </p>

        </div>
    );
}
