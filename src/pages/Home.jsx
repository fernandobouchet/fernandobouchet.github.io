import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Projects from '../components/Projects';

const Home = () => {
  return (
    <div className="bg-light-background text-light-font dark:bg-dark-background dark:text-dark-font transition">
      <NavBar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};
export default Home;
