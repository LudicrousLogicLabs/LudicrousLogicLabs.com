import React, { useState } from 'react';

import mailchimp from "@mailchimp/mailchimp_marketing";



interface signupFormProps {
    emailPlaceholderText: string;
    submitEmailButtonText: string;
    formHeaderText: string;

}

//TODO: implement fully, currently fails due to CORS headers issues, migrate to NEXT
const SignupForm: React.FC<signupFormProps> = ({ emailPlaceholderText, submitEmailButtonText, formHeaderText }) => {
    const [result, setResult] = useState("");

    const handleSubmit = async (formEvent: React.FormEvent<HTMLFormElement>) => {
        formEvent.preventDefault();
        setResult("Stealing user data...");
        //get value

        mailchimp.setConfig({
            apiKey: import.meta.env.VITE_FORM_KEY,
            server: import.meta.env.VITE_SERVER_PREFIX,
        });
        const response = await mailchimp.lists.addListMember(import.meta.env.VITE_AUDIENCE_ID, {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            email_address: (formEvent.target as HTMLFormElement).elements["email"].value,
            status: "pending"
        })
        console.log(response);
    };

    return (
        <div className="flex flex-col items-center justify-center h-2/4 bg-transparent space-y-8">
            <h2 className="text-3xl font-bold text-gray-300 drop-shadow-xl">{formHeaderText}</h2>
            <form onSubmit={handleSubmit} className="w-64">
                <div className="flex flex-row items-center justify-center">
                    <input
                        type="email"
                        name="email"
                        placeholder={emailPlaceholderText}
                        className="w-44 px-4 py-2 text-gray-800 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
                    />
                    <button
                        type="submit"
                        className="w-20 px-4 py-2 font-bold text-white text-center bg-orange-400 rounded-lg hover:bg-purple-300 focus:outline-none focus:shadow-outline"
                    >
                        {submitEmailButtonText}
                    </button>
                </div>
                <span className='absolute text-red-500 whitespace-nowrap'>{result}</span>
            </form>
        </div>
    );
};

export default SignupForm;