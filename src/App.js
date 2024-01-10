import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Project from "./components/Project";
import NoPage from "./components/NoPage";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Work from "./components/Work";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  //Scope -- boundaries in which we can acccess the variable.
  //lexical environment -- hiearchy   (lexical use use for nested thing like function ke andar function)  function abc(){ function xyz(){ } }
  //Lexical scope -- ability given by javascript by which the inner function (function xyz(){}) can access variable his and its parents lexical enivronment variables in its scope(area).

  /*
  function abc() {
    var a = 5;
    function xyz() {
        console.log(a);
    }
    
    xyz();
  }
  
  abc();

  first find in its local scope then in its parent lexical environment then in global scope.

  function abc() {
    var a = 5;
   
  }

   function xyz() {
        console.log(a);
    }
    
    xyz();
  
  abc();
  
  */

  //navigate("/",{state:{user_id:is}});  location.state--->for accesing data in navigated page.

  return (
    <>
      <Header />
      <Routes>
        {" "}
        {/* wrap all route in routes(plural) */}
        <Route path="/" element={<Content />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="skills" element={<Skills />} />
        <Route path="work" element={<Work />} />
        <Route path="project" element={<Project />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
