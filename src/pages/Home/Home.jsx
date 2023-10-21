import Articles from "../../components/Articles/Articles";
import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import Nike from "../../components/Brands/Nike";
import Adidas from "../../components/Brands/Adidas";
import Zara from "../../components/Brands/Zara";
import Hermes from "../../components/Brands/Hermes";
import Gucci from "../../components/Brands/Gucci";
import Tiffany from "../../components/Brands/Tiffany";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: "mobile",
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: true,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,

      offset: 300,
      delay: 100,

      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div className='max-w-6xl m-auto dark:bg-dark dark:text-light'>
      <Navbar />
      <Banner></Banner>
      <Services></Services>

      <div
        data-aos='zoom-in-down'
        className='mt-10 mb-10 flex flex-col items-center justify-center space-y-3'
      >
        <p className='text-2xl md:text-4xl font-bold'>Explore Global Brands </p>
        <div className='w-48 bg-gray-500 h-1 '></div>
      </div>

      <div data-aos='zoom-in-down' className='grid md:grid-cols-2'>
        <Nike></Nike>
        <Adidas></Adidas>
        <Zara></Zara>
        <Hermes></Hermes>
        <Gucci></Gucci>
        <Tiffany></Tiffany>
      </div>

      <Articles></Articles>
      <Footer></Footer>
    </div>
  );
};

export default Home;
