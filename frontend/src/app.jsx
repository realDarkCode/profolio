import { Navbar } from "./components";
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";

import "./app.scss";
export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Testimonial />
      <Work />
      <Footer />
    </div>
  );
}
