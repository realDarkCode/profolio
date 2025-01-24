import Navbar from "@/components/Navbar";
import About from "@/container/About";
import Experience from "@/container/Experience";
import Footer from "@/container/Footer";
import Home from "@/container/Home";
import Testimonial from "@/container/Testimonial";
import Work from "@/container/Work";

import "./app.scss";
export default function App() {
  return (
    <div className="app overflow-x-hidden">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Experience />
      <Testimonial />
      <Footer />
    </div>
  );
}
