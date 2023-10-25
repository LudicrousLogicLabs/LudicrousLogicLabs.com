import React from "react";
import BackgroundImage from "./BackgroundImage";


const LandingPage: React.FC = () => {
    return (
        <div className="relative h-screen w-screen">
            <BackgroundImage/>
            <div className="absolute z-10 flex flex-col items-center justify-center h-screen w-screen">

            </div>
        </div>
    )
};

export default LandingPage;