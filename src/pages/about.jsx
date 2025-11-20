export default function About() {
    return (
        <div className="page-container about-page fade-in">
            <h1>Grandma’s German Chocolate Cake</h1>
            <h2 style={{ color: "var(--pink)", marginBottom: "20px" }}>
                A Digital Heritage Project
            </h2>

            <p>
                This project is part of my senior project for my Digital Media Arts and
                Technology major. It’s dedicated to my Grandma Kalie, who taught me how to
                make her German Chocolate Cake — a recipe passed down through
                generations and preserved throughout the years.
            </p>

            <p>
                Through this site, I’ve transformed my grandmother’s recipe, baking
                process, and family traditions into a digital story that blends coding,
                history, and memory. My goal was to take something meaningful from my
                family and reimagine it through digital humanities methods and modern
                web technologies.
            </p>

            <p>
                This digital version of my grandmother’s recipe highlights more than
                just ingredients — it celebrates tradition, time, and the love behind
                every slice.
            </p>

            <div
                className="about-cake-bounce"
                style={{ fontSize: "60px", marginTop: "20px" }}
            >
                🎂
            </div>
        </div>
    );
}

