import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Mission from "./components/Mission/Mission";
import Careers from "./components/Careers/Careers";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Mission />
      <Careers />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;