import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
);

const renderContent = {
    1: (
        <h1
            className="sm:text-xl sm:leading-snug text-center neo-brutalism-pink py-4 px-8 text-white mx-5 relative"
            style={{ top: "-40px" }}
        >
            Hi, I'm
            <span className="font-semibold mx-2 text-white">
                <span className="text-4xl">L</span>iza
            </span>
            👋
            <br />A Software Engineer from Toronto, Canada
        </h1>
    ),
    2: (
        <InfoBox
            text="Worked with many companies and picked up many skills along the way"
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox
            text="Developed multiple projects to sucess over the years. Curious about the impact?"
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox
            text="Need a project done or looking for a dev? I'm just a few keystrokes away!"
            link="/contact"
            btnText="Let's talk"
        />
    ),
};

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
};

export default HomeInfo;
