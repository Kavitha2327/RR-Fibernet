import TopContactBar from "./components/layout/TopContainerbar";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Plans from "./components/sections/Plans";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import "./globals.css";
import TopBanner from "./components/layout/Banner";

const Home = () => {
  return (
    <>
      <TopBanner />
      <TopContactBar />
      <Header />
      <Hero />
      <About />
      <Services />
      <Plans />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
