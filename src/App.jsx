//import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Student from './components/Student.jsx';
//import Footer from './components/Footer.jsx';

const App = () => (
  <div className="font-sans">
    <Header />
    <Hero />
    <Services />
    <div className="px-4">
      <h2 className="text-2xl font-bold text-center mt-12 mb-6">Featured Student</h2>
      <Student />
    </div>
    <Footer />
  </div>
);

export default App;
