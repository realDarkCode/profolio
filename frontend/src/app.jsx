import Navbar from "@/components/Navbar";
import About from "@/container/About";
import Footer from "@/container/Footer";
import Home from "@/container/Home";
import Skills from "@/container/Skills";
import Testimonial from "@/container/Testimonial";
import Work from "@/container/Work";

import "./app.scss";
export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}
