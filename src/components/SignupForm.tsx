import { useState } from 'react';

const SignupForm: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //TODO: add signup form logic here(Still setting up accounts)
        console.log('Email submitted:', email);
    };

    return (
        <div className="flex flex-col items-center justify-center h-2/4 bg-transparent space-y-8">
            <h2 className="text-3xl font-bold text-navy-blue drop-shadow-xl">Stay Posted!</h2>
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
                    className="w-full px-4 py-2 font-bold text-white bg-navy-blue rounded-lg hover:bg-navy-blue-lighter focus:outline-none focus:shadow-outline"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default SignupForm;