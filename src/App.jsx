import Navbar from "./layouts/navbar"
import Footer from "./layouts/footer"
import Home from "./pages/home"
import Project from "./pages/project"
import ContactUs from "./pages/contactus"
import AboutUs from './pages/about';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App