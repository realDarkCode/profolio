import Navbar from "@/components/Navbar";
import Home from "@/container/Home";
import "./app.scss";
export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      {/* <About />
      <Skills />
      <Testimonial />
      <Work />
      <Footer /> */}
    </div>
  );
}
