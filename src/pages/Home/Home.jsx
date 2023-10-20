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

const Home = () => {
  return (
    <div className='max-w-6xl m-auto dark:bg-dark dark:text-light'>
      <Navbar />
      <Banner></Banner>
      <Services></Services>

      <div className='mt-10 mb-10 flex flex-col items-center justify-center space-y-3'>
        <p className='text-2xl md:text-4xl font-bold'>Explore Global Brands </p>
        <div className='w-48 bg-gray-500 h-1 '></div>
      </div>

      <div className='grid md:grid-cols-2'>
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
