"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaChartLine, FaCloudSunRain, FaComments, FaMobileAlt, FaLanguage } from 'react-icons/fa';

const FarmDataLanding: React.FC = () => {
    const router = useRouter()
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-green-600 text-2xl font-bold">🌾 Kisan Mitra</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-green-600">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-green-600">How It Works</a>
              <a href="#testimonials" className="text-gray-700 hover:text-green-600">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600">Contact</a>
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700" onClick={()=>{router.push("/kisanchatbot")}}>
              Kisan Chatbot
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Smart Farming for <span className="text-green-600">Indian Farmers</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Get real-time crop prices, weather forecasts, and expert advice - all in one place. 
              Make informed decisions to maximize your harvest and profits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-medium" onClick={()=>router.push('/')}>
                Get Started
              </button>
              <button className="border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 font-medium">
                Watch 
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Farmer using smartphone" 
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <FaChartLine className="text-green-600" />
                </div>
                <div>
                  <p className="font-semibold">Live Market Prices</p>
                  <p className="text-sm text-gray-500">Updated every hour</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Key Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to make better farming decisions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaChartLine className="text-3xl text-green-600" />,
                title: "Real-Time Market Prices",
                description: "Access live crop prices from nearby mandis with historical trends"
              },
              {
                icon: <FaCloudSunRain className="text-3xl text-green-600" />,
                title: "Hyperlocal Weather",
                description: "Accurate 7-day forecasts tailored to your exact location"
              },
              {
                icon: <FaComments className="text-3xl text-green-600" />,
                title: "Expert Advisory",
                description: "Get crop-specific advice from agricultural scientists"
              },
              {
                icon: <FaMobileAlt className="text-3xl text-green-600" />,
                title: "Offline Support",
                description: "Works even with poor internet connectivity"
              },
              {
                icon: <FaLanguage className="text-3xl text-green-600" />,
                title: "Regional Languages",
                description: "Available in Hindi, Marathi, Tamil, and more"
              },
              {
                icon: <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>,
                title: "Government Schemes",
                description: "Information about subsidies and farmer welfare programs"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-green-50 p-6 rounded-lg hover:shadow-md transition">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How FarmData Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Simple steps to get the most out of your farming
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Select Your Location",
                description: "Pin your farm location for accurate data"
              },
              {
                step: "2",
                title: "Choose Your Crops",
                description: "Select the crops you're growing or planning to grow"
              },
              {
                step: "3",
                title: "Get Personalized Insights",
                description: "Receive tailored recommendations and alerts"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Farmers Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by thousands of farmers across India
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "FarmData helped me get 20% better prices for my wheat by showing me the best time to sell.",
                name: "Rajesh Kumar",
                location: "Punjab"
              },
              {
                quote: "The weather alerts saved my tomato crop from unexpected rains. This app is a lifesaver!",
                name: "Priya Patel",
                location: "Maharashtra"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-green-50 p-6 rounded-lg">
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 font-semibold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">🌾 FarmData</h3>
              <p className="text-gray-400">
                Empowering Indian farmers with data-driven agriculture since 2023
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>KisanMitra@example.com</li>
                <li>+91 XXXXX XXXXX</li>
                <li>MAIT , Delhi , India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 Kisan Mitra. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FarmDataLanding;