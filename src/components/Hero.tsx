import React from "react";
import SignupForm from "./SignupForm";

interface HeroProps {
    title: string;
    subtitle: string;
    image: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, image }) => {
    const bgImageStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }
    return (
        <div className="flex flex-col items-center justify-center h-3/4 bg-slate-600" style={bgImageStyle}>
            <div className="space-y-4">
                <h1 className="text-5xl font-bold text-navy-blue drop-shadow-xl text-center">{title}</h1>
                <h2 className="text-3xl text-gray-300 drop-shadow-sm text-center">{subtitle}</h2>
                <SignupForm />
            </div>
        </div>
    )
}

export default Hero;