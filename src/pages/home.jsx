import { useState } from "react";

const layerData = {
    cherry: {
        title: "About My Grandma",
        text: "The cherry represents my grandma, who first taught me how to make this German chocolate cake. Baking it together is one of the ways our family stories and traditions get passed down.",
        color: "crimson"
    },
    frosting: {
        title: "Frosting Layer",
        text: "The frosting connects everything together and makes it feel finished. It stands for the design, media, and user experience choices that make this project inviting to explore.",
        color: "#f5a9b8"
    },
    layer1: {
        // this is the bottom brown layer (closest to the frosting)
        title: "Bottom Cake Layer",
        text: "The top cake layer represents the final pass of the project: the React site that pulls together the XML data, XSLT transformations, and media into an interactive experience.",
        color: "#c49b6a"
    },
    layer2: {
        // this is the MIDDLE brown layer
        title: "Middle Cake Layer",
        text: "The middle cake layer represents the XML and XSLT work—modeling ingredients and steps as structured data and transforming them into readable HTML.",
        color: "#b07c4b"
    },
    layer3: {
        // this is the top brown layer
        title: "Top Cake Layer",
        text: "The bottom cake layer stands for the foundation of the project: the original handwritten recipe, careful transcription, and decisions about what information to preserve.",
        color: "#9b6b3d"
    }
};

export default function Home() {
    // Start with the frosting highlighted by default (you can change to "cherry" if you prefer)
    const [activeKey, setActiveKey] = useState("frosting");
    const active = layerData[activeKey];

    return (
        <div className="page-container home-page fade-in">
            <h1 className="home-title">Welcome to My Project</h1>
            <p className="home-tagline">
                A sweet React site inspired by my Grandma’s German Chocolate Cake project.
            </p>

            {/* CAKE STACK */}
            <div className="home-cake-animation">
                {/* Top-down visual order you described:
                    cherry on top
                    frosting layer
                    top layer
                    middle layer
                    bottom layer
                */}

                {/* BOTTOM brown layer */}
                <div
                    className="cake-layer layer3"
                    onClick={() => setActiveKey("layer3")}
                    role="button"
                    aria-label="Bottom cake layer"
                ></div>

                {/* MIDDLE brown layer */}
                <div
                    className="cake-layer layer2"
                    onClick={() => setActiveKey("layer2")}
                    role="button"
                    aria-label="Middle cake layer"
                ></div>

                {/* TOP brown layer */}
                <div
                    className="cake-layer layer1"
                    onClick={() => setActiveKey("layer1")}
                    role="button"
                    aria-label="Top cake layer"
                ></div>

                {/* Frosting */}
                <div
                    className="cake-frosting"
                    onClick={() => setActiveKey("frosting")}
                    role="button"
                    aria-label="Frosting layer"
                ></div>

                {/* Cherry */}
                <div
                    className="cake-cherry"
                    onClick={() => setActiveKey("cherry")}
                    role="button"
                    aria-label="Cherry (about my grandma)"
                ></div>
            </div>

            <p className="home-message">
                Click the cherry, frosting, or any cake layer to see what part of the project it represents.
            </p>

            {/* TEXT THAT CHANGES COLOR TO MATCH THE CLICKED LAYER */}
            <section className="home-info-card fade-in">
                <h2
                    className="home-dynamic-text"
                    style={{ color: active.color }}
                >
                    {active.title}
                </h2>
                <p
                    className="home-dynamic-text"
                    style={{ color: active.color }}
                >
                    {active.text}
                </p>
            </section>
        </div>
    );
}
