import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Project from "./components/Project";
import NoPage from "./components/NoPage";
import { Routes , Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change
  return (
    <>
      <Header />
      <Routes> {/* wrap all route in routes(plural) */}
        <Route path="/" element={<Content />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="skills" element={<Skills />} />
        <Route path="project" element={<Project />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
