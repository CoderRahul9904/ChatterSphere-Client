import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
    return (
        <>
            <Header />
            <div className="min-h-screen flex mb-20 sm:mb-0 flex-col justify-center items-center bg-gradient-to-br dark:from-chatter-start dark:via-chatter-mid dark:to-chatter-end dark:text-white">
                {/* Logo/Header */}

                <header className="text-center mb-8">
                    <h1 className="text-4xl md:text-6xl font-extrabold">
                        🎧 Chatter<span className="dark:text-purple-400 text-blue-400">Sphere</span>
                    </h1>
                    <p className="text-xl md:text-2xl mt-4">
                        The Real-Time Communication Platform of Tomorrow
                    </p>
                </header>

                {/* Get Started Button */}
                <div className="flex gap-4">
                    <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-lg font-semibold shadow-lg transition-all">
                        <Link to="/room">
                           Get Started
                        </Link>
                    </button>
                    <button className="px-6 py-3 dark:bg-gray-700 bg-stone-200 dark:hover:bg-gray-800 rounded-lg text-lg font-semibold shadow-lg transition-all">
                        Github
                    </button>
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </>
    )
}


export default LandingPage