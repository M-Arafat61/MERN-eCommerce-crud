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
    <div className='max-w-6xl m-auto'>
      <Navbar />
      <Banner></Banner>
      <Services></Services>

      <Nike></Nike>
      <Adidas></Adidas>
      <Zara></Zara>
      <Hermes></Hermes>
      <Gucci></Gucci>
      <Tiffany></Tiffany>

      <Articles></Articles>
      <Footer></Footer>
    </div>
  );
};

export default Home;
