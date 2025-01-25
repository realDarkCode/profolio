import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Courses from "@/sections/Courses";
import Experience from "@/sections/Experience";
import Home from "@/sections/Home";
import Testimonial from "@/sections/Testimonial";
import Work from "@/sections/Work";

import "./app.scss";
export default function App() {
  return (
    <div className="app overflow-x-hidden">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Experience />
      <Courses />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}
