import React from "react";
import Hero from "../components/Hero";
import SignupForm from "../components/SignupForm";

const LandingPage: React.FC = () => {
    return (
        <div className="h-full">
            <Hero
                title="Welcome to Ludicrous Logic Labs"
                subtitle="AI Software Unleashed"
                image="/images/hero.png">
                <SignupForm />
            </Hero>


        </div>
    )
};

export default LandingPage;