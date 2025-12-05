import { useState } from "react";

/* IMAGE IMPORTS */
import chocBoilingImg from "../assets/choc-boiling.JPG";
import cakeBatterMixing2Img from "../assets/cake-batter-mixing2.JPG";
import cakeFlourImg from "../assets/cake-flour.JPG";
import batterInPansImg from "../assets/batter-in-pans.JPG";
import cakesBakingImg from "../assets/cakes-baking.JPG";
import begininFrostingImg from "../assets/beginin-frosting.JPG";
import cakeFrosting2Img from "../assets/cake-frosting2.jpeg";
import cakeFrosting4Img from "../assets/cake-frosting4.jpeg";

/* VIDEO IMPORTS  */
import chocInBatterVid from "../assets/videos/choc-going-in-cake-batter.mp4";
import creamingBatterVid from "../assets/videos/creaming-batter.mp4";
import cakeBatterMixingVid from "../assets/videos/cake-batter-mixing.mp4";
import cakeFlourMixingVid from "../assets/videos/cake-flour-mixing-in.mp4";
import siftingFlourVid from "../assets/videos/showing-sifting-flour.mp4";
import foldingEggWhitesVid from "../assets/videos/folding-in-egg-whites.mp4";
import batterInPansVid from "../assets/videos/cake-batter-in-pans.mp4";
import frostingAdviceVid from "../assets/videos/frosting-advice.mp4";
import frostingTimelapseVid from "../assets/videos/frosting-timelapse.mp4";
import finishedFrostingVid from "../assets/videos/finished-frosting.mp4";

/*  CAKE STEPS */
const cakeSteps = [
    {
        id: 1,
        title: "Melt the Chocolate",
        text: `Melt the Baker’s German sweet chocolate slowly in hot water so it does not burn.
Take the pan off the burner to cool so the chocolate thickens nicely before adding it to the batter.`,
        images: [chocBoilingImg],
        videos: [chocInBatterVid],
    },
    {
        id: 2,
        title: "Cream Butter and Sugar",
        text: `Cream the butter and sugar until light and fluffy.
A stand mixer works well, but any mixer you have available is fine.`,
        images: [cakeBatterMixing2Img],
        videos: [creamingBatterVid, cakeBatterMixingVid],
    },
    {
        id: 3,
        title: "Mixing in Flour and Buttermilk",
        text: `Sift together the flour, baking soda, and salt.
Add dry ingredients alternately with the buttermilk, mixing gently to keep the batter tender.`,
        images: [cakeFlourImg],
        // 2 videos here – will show side by side
        videos: [siftingFlourVid, cakeFlourMixingVid],
    },
    {
        id: 4,
        title: "Folding in Egg Whites",
        text: `Beat egg whites until stiff peaks form, then gently fold into the batter.
Fold slowly with a spatula so you don't deflate the whites.`,
        images: [],
        videos: [foldingEggWhitesVid],
    },
    {
        id: 5,
        title: "Pouring into Pans and Baking",
        text: `Divide the batter evenly into three prepared pans.
Smooth the tops and bake until a toothpick inserted in the center comes out clean.`,
        images: [batterInPansImg, cakesBakingImg],
        videos: [batterInPansVid],
    },
    {
        id: 6,
        title: "Cooling the Cakes",
        text: `Let the cakes cool in the pans for 15–20 minutes,
then turn out onto cooling racks. Cool completely before frosting.`,
        images: [cakesBakingImg],
        videos: [],
    },
];

/* FROSTING STEPS */
const frostingSteps = [
    {
        id: 1,
        title: "Mixing Ingredients",
        text: `Combine the base frosting ingredients and beat until they begin to blend smoothly.`,
        images: [begininFrostingImg],
        videos: [frostingTimelapseVid],
    },
    {
        id: 2,
        title: "Adding Sugar and Vanilla",
        text: `Add sugar and vanilla gradually, scraping the bowl often so the texture stays even.`,
        images: [cakeFrosting2Img],
        videos: [frostingAdviceVid],
    },
    {
        id: 3,
        title: "Final Frosting Texture",
        text: `Beat until the frosting is thick, fluffy, and spreadable.`,
        images: [cakeFrosting4Img],
        videos: [finishedFrostingVid],
    },
];

export default function Recipe() {
    // NEW: one state for bookmarked step, one for open video step
    const [activeStepId, setActiveStepId] = useState(null);
    const [openStepId, setOpenStepId] = useState(null);

    return (
        <div className="recipe-page page-container fade-in">
            <h1>Curated Recipe</h1>
            <p className="recipe-intro">
                This curated recipe is designed for actually baking the cake. Click
                <strong> “Show Video”</strong> on a step to see exactly what that part looks like –
                the open step is highlighted like a bookmark. You can also click on a step’s card
                to toggle its bookmark on or off while you work.
            </p>

            <h2>Gram’s German Sweet Chocolate Cake</h2>

            {/* CAKE STEPS */}
            {cakeSteps.map((step) => {
                const key = `cake-${step.id}`;
                const isActive = activeStepId === key; // bookmark
                const isOpen = openStepId === key;     // video

                return (
                    <section
                        key={key}
                        className={`recipe-step ${isActive ? "recipe-step--active" : ""}`}
                        onClick={() =>
                            setActiveStepId((prev) => (prev === key ? null : key))
                        }
                    >
                        <h3>
                            Cake Step {step.id}: {step.title}
                        </h3>
                        <p>{step.text}</p>

                        {/* Images for this step */}
                        {step.images.length > 0 && (
                            <div className="recipe-images">
                                {step.images.map((img, i) => (
                                    <img key={i} src={img} alt="" />
                                ))}
                            </div>
                        )}

                        {/* Videos for this step */}
                        {step.videos.length > 0 && (
                            <>
                                <button
                                    type="button"
                                    className="recipe-video-toggle"
                                    onClick={(e) => {
                                        e.stopPropagation(); // don't toggle bookmark when clicking the button
                                        setOpenStepId((prev) =>
                                            prev === key ? null : key
                                        );
                                    }}
                                >
                                    {isOpen ? "Hide Video" : "Show Video"}
                                </button>

                                {isOpen && (
                                    <div
                                        className="recipe-videos"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {step.videos.map((vid, i) => (
                                            <video key={i} src={vid} controls />
                                        ))}
                                    </div>
                                )}
                            </>
                        )}
                    </section>
                );
            })}

            <h2>Frosting Instructions</h2>

            {/* FROSTING STEPS */}
            {frostingSteps.map((step) => {
                const key = `frosting-${step.id}`;
                const isActive = activeStepId === key;
                const isOpen = openStepId === key;

                return (
                    <section
                        key={key}
                        className={`recipe-step ${isActive ? "recipe-step--active" : ""}`}
                        onClick={() =>
                            setActiveStepId((prev) => (prev === key ? null : key))
                        }
                    >
                        <h3>
                            Frosting Step {step.id}: {step.title}
                        </h3>
                        <p>{step.text}</p>

                        {step.images.length > 0 && (
                            <div className="recipe-images">
                                {step.images.map((img, i) => (
                                    <img key={i} src={img} alt="" />
                                ))}
                            </div>
                        )}

                        {step.videos.length > 0 && (
                            <>
                                <button
                                    type="button"
                                    className="recipe-video-toggle"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setOpenStepId((prev) =>
                                            prev === key ? null : key
                                        );
                                    }}
                                >
                                    {isOpen ? "Hide Video" : "Show Video"}
                                </button>

                                {isOpen && (
                                    <div
                                        className="recipe-videos"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {step.videos.map((vid, i) => (
                                            <video key={i} src={vid} controls />
                                        ))}
                                    </div>
                                )}
                            </>
                        )}
                    </section>
                );
            })}
        </div>
    );
}


