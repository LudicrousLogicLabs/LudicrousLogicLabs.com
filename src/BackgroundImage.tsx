import React from "react";
import backgroundImage from './assets/background.png'


const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
};
//Jason: is this a fucked pattern using inline styling and tailwind together? IDK tailwind for shit lmao
const BackgroundImage: React.FC = () => {
    return (< div className="m-0 p-0 absolute h-screen w-screen" style={backgroundStyle} ></div >)

};

export default BackgroundImage;
