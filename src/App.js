import './App.css';
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Team from './pages/Team'
import Gallery from './pages/Gallery'

function App() {
  return (
    <div className="App">
       < Navbar />
       <Routes>
          <Route exact path="/" element={ <Home />} />
          <Route exact path="blog" element={ <Blog />} />
          <Route exact path="contact" element={ <Contact />} />
          <Route exact path="gallery" element={ <Gallery />} />
          <Route exact path="services" element={ <Services />} />
          <Route exact path="team" element={ <Team />} />
       </Routes>
    </div>
  );
}

export default App;
