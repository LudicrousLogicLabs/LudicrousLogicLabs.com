import React from "react";

interface CardProps {
    title: string;
    description: string;
    image: string;
    alt: string;
}

const Card: React.FC<React.PropsWithChildren<CardProps>> = ({ image, title, description, alt }) => {
  return (
    <div className="flex basis-0 grow flex-col border-solid border-slate-400 rounded-lg px-7 py-10 border-2">
        <img src={image} alt={alt} className="h-16 w-16 mx-auto rounded-[50%] overflow-visible bg-slate-300 p-4" />
        <h3 className="text-2xl font-bold text-center mt-5">{title}</h3>
        <p className="text-center mt-5">{description}</p>
    </div>
  )
}

export default Card;