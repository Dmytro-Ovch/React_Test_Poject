import React from 'react';

// Navigation Component (Arrow Function)
const Navigation = () => (
  <nav>
    <ul>
      <li><a href="#hero">Home</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#footer">Contact</a></li>
    </ul>
  </nav>
);

// Header Component (Arrow Function, includes Navigation)
const Header = () => (
  <header>
    <h1>My Website</h1>
    <Navigation />
  </header>
);

// Hero Component (Arrow Function)
const Hero = () => (
  <section id="hero">
    <h2>Welcome to Our Website</h2>
    <p>Your success is our priority. Let's build something great together!</p>
  </section>
);

// Services Component (Arrow Function)
const Services = () => (
  <section id="services">
    <h2>Our Services</h2>
    <ul>
      <li>Web Development</li>
      <li>UI/UX Design</li>
      <li>SEO Optimization</li>
    </ul>
  </section>
);

// Footer Component (Arrow Function)
const Footer = () => (
  <footer id="footer">
    <p>&copy; 2025 My Website. All rights reserved.</p>
  </footer>
);

// App Component (Arrow Function)
const App = () => (
  <div>
    <Header />
    <Hero />
    <Services />
    <Footer />
  </div>
);

export default App;
