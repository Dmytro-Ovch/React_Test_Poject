import React from 'react';

// Navigation Component (with Tailwind styling)
const Navigation = () => (
  <nav className="bg-blue-600 p-4">
    <ul className="flex justify-center space-x-6 text-white font-semibold">
      <li><a href="#hero" className="hover:text-yellow-300">Home</a></li>
      <li><a href="#services" className="hover:text-yellow-300">Services</a></li>
      <li><a href="#footer" className="hover:text-yellow-300">Contact</a></li>
    </ul>
  </nav>
);

// Header Component
const Header = () => (
  <header className="bg-blue-700 text-white text-center py-6 shadow-md">
    <h1 className="text-3xl font-bold mb-2" style={{ letterSpacing: '1px' }}>My Website</h1> {/* inline style example */}
    <Navigation />
  </header>
);

// Hero Component
const Hero = () => (
  <section id="hero" className="bg-gray-100 py-16 px-4 text-center">
    <h2 className="text-2xl font-bold mb-4">Welcome to Our Website</h2>
    <p className="text-lg text-gray-700 max-w-xl mx-auto">
      Your success is our priority. Let's build something great together!
    </p>
  </section>
);

// Services Component
const Services = () => (
  <section id="services" className="py-16 px-4 text-center bg-white">
    <h2 className="text-2xl font-bold mb-6">Our Services</h2>
    <ul className="space-y-2 text-lg text-gray-800">
      <li>✅ Web Development</li>
      <li>✅ UI/UX Design</li>
      <li>✅ SEO Optimization</li>
    </ul>
  </section>
);

// Footer Component
const Footer = () => (
  <footer id="footer" className="bg-blue-900 text-white text-center py-6 mt-12">
    <p>&copy; 2025 My Website. All rights reserved.</p>
  </footer>
);

// App Component
const App = () => (
  <div className="font-sans">
    <Header />
    <Hero />
    <Services />
    <Footer />
  </div>
);

export default App;
