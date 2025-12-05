import { useState } from "react";

const steps = [
    {
        id: 1,
        short: "Digitizing",
        title: "From Handwritten Recipe → Structured Digital Text",
        desc: `The project began with my grandma’s handwritten German Chocolate Cake recipe card.
Over the years of having this treasured recipe the kitchen accidental spills ended up being to much for the very old card. So my mom and I had to copy what was on the original to a typed version then from that the project that you see today. 

During transcription, I had decisions to make: how to standardize abbreviations,
how to handle unclear measurements, and which parts were instructional vs contextual.
This step also required evaluating what information was essential to the recipe
and what could become metadata later (for example, family origin, date, and notes).`,
        code: `<recipe source="handwritten-card" date="2005">
  <title>Grandma's German Chocolate Cake</title>
  <note origin="family-tradition">
    Taught to me when I was twelve years old.
  </note>
</recipe>`
    },
    {
        id: 2,
        short: "XML Model",
        title: "Creating the XML Schema and Encoding the Recipe",
        desc: `The next major stage was designing how the recipe should function as structured data.
XML allowed me to define clear elements for ingredients, equipment, preparation steps,
multimedia references, and metadata.

I created a custom Relax NG schema to enforce rules, such as:
• ingredients must contain item and amount
• steps must contain a number, an action, and optional media
• media elements must include @source and @type

This schema ensured consistency across different transformations and prevented
invalid markup. Encoding the recipe in XML transformed the cake from a casual family
object into a machine-readable artifact that can be styled, indexed, and reused.`,
        code: `<step n="3">
  <action>Fold egg whites gently into batter.</action>
  <media type="video" source="folding-egg-whites.mp4"/>
</step>`
    },
    {
        id: 3,
        short: "XSLT",
        title: "Transforming XML into HTML with XSLT",
        desc: `Once the XML was finalized, I wrote XSLT stylesheets to transform the content
into clean HTML reading views. The stylesheet handles loops, conditionals,
and template matches that determine how each XML element is displayed.

Each ingredient, step, and note is turned into HTML elements like lists, headings,
and paragraphs. This allowed the original XML to be repurposed into multiple formats
while staying semantically meaningful.

XSLT became the bridge between structured data and a human-friendly recipe page.`,
        code: `<xsl:template match="ingredient">
  <li>
    <span class="amt">
      <xsl:value-of select="@amount"/>
    </span>
    <span class="item">
      <xsl:value-of select="."/>
    </span>
  </li>
</xsl:template>`
    },
    {
        id: 4,
        short: "React Build",
        title: "Rebuilding the Project as a Modern React Application",
        desc: `The final stage was transforming everything into an interactive React website.
Each original HTML page became a reusable component: Home, Gallery, About,
Recipe, and Behind the Scenes.

React Router manages navigation, so moving between pages does not reload the whole site.
Images and videos are imported as ES modules and displayed conditionally. The recipe
page uses arrays of step objects, and state, so that videos only appear when the user
chooses.

The homepage SVG cake is also "Reactified" if you will, clicking a cake layer updates state to show
different project narratives: Cake, Grandma, Project, and Using the Site. This stage
modernized the project and connected the archival XML work to a contemporary web stack.`,
        code: `const [activeLayer, setActiveLayer] = useState("cake");

<div
  className="cake-layer"
  onClick={() => setActiveLayer("project")}
/>`
    }
];

export default function Behind() {
    const [activeId, setActiveId] = useState(1);

    return (
        <div className="page-container workflow-container fade-in">
            <h1 className="workflow-title">Behind the Scenes</h1>
            <p className="workflow-subtitle">
                How a handwritten family recipe turned into XML, XSLT, and finally a React site.
                Click each circle to explore what happened in that stage of the project.
            </p>

            <div className="workflow-diagram">
                {steps.map((step) => {
                    const isActive = activeId === step.id;
                    return (
                        <div
                            key={step.id}
                            className={`workflow-node ${isActive ? "is-active" : ""}`}
                            onClick={() => setActiveId(isActive ? null : step.id)}
                        >
                            <div className="workflow-circle">
                                <span className="workflow-step-number">{step.id}</span>
                            </div>
                            <p className="node-title">{step.short}</p>

                            {isActive && (
                                <>
                                    <p className="node-full-title">{step.title}</p>
                                    <p className="node-desc">{step.desc}</p>
                                    {step.code && (
                                        <pre className="code-snippet">
{step.code}
                    </pre>
                                    )}
                                </>
                            )}
                        </div>
                    );
                })}
            </div>

            <p className="behind-note">
                This page is written for DIGIT students and anyone curious about the technical
                workflow behind the cake site.
            </p>
        </div>
    );
}


