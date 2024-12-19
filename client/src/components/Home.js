import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8 items-center">
              <span className="font-bold text-xl text-blue-600">CodeTogether</span>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600">
                Testimonials
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/signup')}
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
              >
                Sign Up
              </button>
              <button
                onClick={() => navigate('/login')}
                className="px-4 py-2 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Code Simpler, Code Quicker, Code Together
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Build amazing projects with friends using the power of collaborative coding
          </p>
          <button
            onClick={() => navigate('/signup')}
            className="px-8 py-3 rounded-lg bg-blue-600 text-white text-lg hover:bg-blue-700"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">What Developers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "This platform has revolutionized how I collaborate with my team. Everything is so much faster now!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold">Developer {i}</p>
                  <p className="text-sm text-gray-500">Software Engineer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            We're passionate about making coding collaboration easier and more efficient.
            Our platform brings together the best tools and practices to help developers
            work together seamlessly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;