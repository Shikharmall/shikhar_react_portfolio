import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Project from './components/Project';
import NoPage from './components/NoPage';
import { BrowserRouter , Route , Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter basename='shikhar_react_portfolio'>
        <Header/>
          <Routes>
            <Route path='' element={<Content/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='skills' element={<Skills/>}/>
            <Route path='project' element={<Project/>}/>
            <Route path='*' element={<NoPage/>}/>
          </Routes>
        <Footer/> 
      </BrowserRouter>
    </>
  );
}

export default App;
