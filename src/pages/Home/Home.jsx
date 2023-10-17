import Articles from "../../components/Articles/Articles";
import Banner from "../../components/Banner/Banner";
import Adidas from "../../components/Brands/Adidas";
import Gucci from "../../components/Brands/Gucci";
import Hermes from "../../components/Brands/Hermes";

import Nike from "../../components/Brands/Nike";
import Tiffany from "../../components/Brands/Tiffany";
import Zara from "../../components/Brands/Zara";
import Services from "../../components/Services/Services";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";

const Home = () => {
  return (
    <div className='max-w-6xl m-auto'>
      <Navbar />
      <Banner></Banner>
      <Services></Services>
      {/* 6 category card  */}
      <Nike></Nike>
      <Adidas></Adidas>
      <Gucci></Gucci>
      <Zara></Zara>
      <Hermes></Hermes>
      <Tiffany></Tiffany>

      {/* Articles */}
      <Articles></Articles>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
