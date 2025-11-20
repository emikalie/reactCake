import { useState } from "react";
import finishedCake from "../assets/finished-cake.jpeg";

export default function Behind() {
    const [active, setActive] = useState(null);

    const toggle = (section) => {
        setActive(active === section ? null : section);
    };

    return (
        <div className="behind-container">
            <h1>Behind the Scenes</h1>
            <p className="behind-subtitle">
                A visual breakdown of the technical process behind my German Chocolate Cake digital heritage project.
            </p>

            {/* STEP 1 */}
            <div className="step">
                <img
                    src={finishedCake}
                    alt="Cake"
                    className="circle-img"
                    onClick={() => toggle(1)} // Image click toggles text
                />
                <h2>Handwritten Recipe ➜ Digital Form</h2>
                <p className={active === 1 ? "show-text" : "hide-text"}>
                    The original recipe was photographed and transcribed into a structured format for preservation.
                </p>

                <button className="code-toggle" onClick={() => toggle(1)}>
                    {active === 1 ? "Hide Code" : "Show Code"}
                </button>

                {active === 1 && (
                    <pre className="code-snippet">
{`<!-- Sample XML -->
<recipe>
    <title>Grandma's German Chocolate Cake</title>
    <source>2005 handwritten recipe card</source>
</recipe>`}
                    </pre>
                )}
            </div>

            {/* STEP 2 */}
            <div className="step">
                <img
                    src={finishedCake}
                    alt="Cake"
                    className="circle-img"
                    onClick={() => toggle(2)} // Image click toggles text
                />
                <h2>XML Encoding</h2>
                <p className={active === 2 ? "show-text" : "hide-text"}>
                    I encoded the recipe in XML, marking up tools, ingredients, instructions,
                    and photos so the structure of the cake process is machine-readable.
                </p>

                <button className="code-toggle" onClick={() => toggle(2)}>
                    {active === 2 ? "Hide Code" : "Show Code"}
                </button>

                {active === 2 && (
                    <pre className="code-snippet">
{`<equipment>
    <tool xml:id="mixer">Stand mixer</tool>
    <tool xml:id="cakepans">3 round cake pans</tool>
</equipment>`}
                    </pre>
                )}
            </div>

            {/* STEP 3 */}
            <div className="step">
                <img
                    src={finishedCake}
                    alt="Cake"
                    className="circle-img"
                    onClick={() => toggle(3)} // Image click toggles text
                />
                <h2>XSLT Transformation</h2>
                <p className={active === 3 ? "show-text" : "hide-text"}>
                    Using XSLT, I transformed the XML into styled HTML pages for the website.
                </p>

                <button className="code-toggle" onClick={() => toggle(3)}>
                    {active === 3 ? "Hide Code" : "Show Code"}
                </button>

                {active === 3 && (
                    <pre className="code-snippet">
{`<xsl:template match="ingredient">
<li>
  <xsl:value-of select="item"/>
</li>
</xsl:template>`}
                    </pre>
                )}
            </div>

            {/* STEP 4 */}
            <div className="step">
                <img
                    src={finishedCake}
                    alt="Cake"
                    className="circle-img"
                    onClick={() => toggle(4)} // Image click toggles text
                />
                <h2>Schema Validation</h2>
                <p className={active === 4 ? "show-text" : "hide-text"}>
                    I created a Relax NG schema to validate the structure and required elements
                    of the recipe XML.
                </p>

                <button className="code-toggle" onClick={() => toggle(4)}>
                    {active === 4 ? "Hide Code" : "Show Code"}
                </button>

                {active === 4 && (
                    <pre className="code-snippet">
{`element recipe {
    element title { text },
    element ingredients { ingredient+ }
}`}
                    </pre>
                )}
            </div>
        </div>
    );
}
