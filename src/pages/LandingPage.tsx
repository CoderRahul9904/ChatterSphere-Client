import React from 'react';
import Header from '../components/Header';

const LandingPage: React.FC = () => {
    return (
        <>
    <Header />
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-chatter-start via-chatter-mid to-chatter-end text-white">
      {/* Logo/Header */}
      
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          🎧 Chatter<span className="text-purple-400">Sphere</span>
        </h1>
        <p className="text-xl md:text-2xl mt-4">
          The Real-Time Communication Platform of Tomorrow
        </p>
      </header>

      {/* Get Started Button */}
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-lg font-semibold shadow-lg transition-all">
          Get Started
        </button>
        <button className="px-6 py-3 bg-gray-700 hover:bg-gray-800 rounded-lg text-lg font-semibold shadow-lg transition-all">
          Github
        </button>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-sm text-gray-400">
        © 2025 ChatterSphere. All rights reserved.
      </footer>
    </div>
    </>
    )
}


export default LandingPage