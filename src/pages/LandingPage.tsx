import React from "react";
import Hero from "../components/Hero";
import SignupForm from "../components/SignupForm";

const LandingPage: React.FC = () => {
    return (
        <div className="h-full">
            <Hero
                title="Ludicrous Logic Labs"
                subtitle="AI Software Unleashed"
                image="/images/hero.png">
                <SignupForm
                    emailPlaceholderText="put email here..."
                    submitEmailButtonText="Submit"
                    formHeaderText="Get a bag!" />
            </Hero>


        </div>
    )
};

export default LandingPage;