import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";


const LandingPage: React.FC = () => {
    return (
        <div className="h-full">
            <Hero 
                title="Welcome to Ludicrous Logic Labs"
                subtitle="AI Software Unleashed"
                image="/images/hero.png"
                />
            <section id="about">
                <h1 className="text-center text-3xl font-bold py-2">About</h1>
                <div className="flex w-full gap-4 py-4 px-4 justify-evenly">
                    <Card
                        title="AI Software"
                        description="We build AI software with cutting edge technology."
                        image="/images/brain.svg"
                        />
                    <Card
                        title="Fast and Scalable"
                        description="Our solutions are blazingly fast and infinitely scalable."
                        image="/images/rocket.svg"
                        />
                    <Card
                        title="$$$ Money $$$"
                        description="We will make you rich."
                        image="/images/money.svg"
                        />
                </div>
            </section>
        </div>
    )
};

export default LandingPage;