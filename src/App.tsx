import { useContext, useRef } from 'react';
import Contact from '@components/Contact';
import Footer from '@components/Footer';
import Hero from '@components/Hero';
import Navbar from '@components/Navbar';
import Projects from '@components/Projects';
import { ThemeContext } from '@context/ThemeContext';
import useIntersection from '@hooks/useIntersection';

function App() {
  const { theme } = useContext(ThemeContext);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const intersectionSectionId = useIntersection([ref1, ref2, ref3]);

  return (
    <div id="main_wrapper" className={theme}>
      <Navbar intersectionSectionId={intersectionSectionId} />
      <Hero sectionRef={ref1} intersectionSectionId={intersectionSectionId} />
      <Projects
        sectionRef={ref2}
        intersectionSectionId={intersectionSectionId}
      />
      <Contact
        sectionRef={ref3}
        intersectionSectionId={intersectionSectionId}
      />
      <Footer />
    </div>
  );
}

export default App;
