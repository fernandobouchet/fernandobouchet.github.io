import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Theme";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");

  function changeTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="App">
          <NavBar theme={theme} changeTheme={changeTheme} />
          <About />
          <Projects />
          <Contact theme={theme} />
          <Footer />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
