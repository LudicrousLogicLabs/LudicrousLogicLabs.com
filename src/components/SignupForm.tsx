import React, { useState } from 'react';

const SignupForm: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (formEvent: React.FormEvent) => {
        formEvent.preventDefault();
        //TODO: add signup form logic here(Still setting up accounts)
    };

    return (
        <div className="flex flex-col items-center justify-center h-2/4 bg-transparent space-y-8">
            <h2 className="text-3xl font-bold text-gray-300 drop-shadow-xl">Stay Posted!</h2>
            <form onSubmit={handleSubmit} className="w-64">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email..."
                    className="w-full px-4 py-2 text-gray-800 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
                />
                <button
                    type="submit"
                    className="w-full px-4 py-2 mt-4 font-bold text-white bg-orange-400 rounded-lg hover:bg-purple-300 focus:outline-none focus:shadow-outline"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default SignupForm;