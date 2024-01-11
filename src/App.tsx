import { useContext } from 'react';
import Contact from '@components/Contact';
import Footer from '@components/Footer';
import Hero from '@components/Hero';
import Navbar from '@components/Navbar';
import Projects from '@components/Projects';
import { ThemeContext } from '@context/ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <main className={`bg ${theme}`}></main>
      <div id="main_wrapper" className={theme}>
        <Navbar />
        <Hero />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
