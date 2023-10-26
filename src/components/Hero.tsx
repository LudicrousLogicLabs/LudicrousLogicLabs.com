import React from "react";

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
        <div className="flex flex-col items-center justify-center h-2/3 bg-slate-600" style={bgImageStyle}>
            <h1 className="text-5xl font-bold text-white drop-shadow-xl">{title}</h1>
            <h2 className="text-3xl text-gray-200 drop-shadow-sm">{subtitle}</h2>
        </div>
    )
}

export default Hero;