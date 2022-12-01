import './App.css';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header'
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Testimonials from './components/testimonial/Testimonials';

function App() {
  return (
    <>
     <Header />
     <Nav />
     <About />
     <Experience />
     <Services />
     <Portfolio />
     <Testimonials />
     <Contact />
     <Footer />
    </>
  );
}

export default App;
