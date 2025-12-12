import grandmaImg from "../assets/grandma-holding-me.JPG";
import momImg from "../assets/mom-baby-me.JPG";
import emilyImg from "../assets/mom-me-now2.JPG";

const peopleData = [
    {
        name: "Grandma",
        img: grandmaImg,
        alt: "Grandma holding me as a baby",
        description:
            "The original source of our German sweet chocolate cake recipe. Her handwritten card inspired this entire digital project."
    },
    {
        name: "Mom",
        img: momImg,
        alt: "Mom holding me as a baby",
        description:
            "Keeper of frosting traditions and the family cooking memory. Helps preserve the authentic texture & flavor passed down from Grandma."
    },
    {
        name: "Emily",
        img: emilyImg,
        alt: "Emily smiling",
        description:
            "Digital archivist & editor who transformed the recipe into XML, Relax NG, XSLT, and finally this React site."
    }
];

export default function People() {
    return (
        <div className="page-container people-container fade-in">
            <h1 className="people-title">The People Behind the Cake</h1>

            <p className="people-intro">
                This project preserves both a recipe and a family story. Meet the people
                whose hands, traditions, and memories shaped what the cake — and this site —
                became.
            </p>

            <div className="people-grid">
                {peopleData.map((person) => (
                    <div key={person.name} className="people-card-2">
                        <img src={person.img} alt={person.alt} className="people-photo-2" />

                        <h2 className="people-name">{person.name}</h2>

                        <p className="people-description">{person.description}</p>
                    </div>
                ))}
            </div>

            <p className="people-note">
                The recipe’s evolution reflects the people who kept it alive — from
                handwritten card to digital archive to React website.
            </p>
        </div>
    );
}

