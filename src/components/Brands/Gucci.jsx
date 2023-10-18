import { Link } from "react-router-dom";

const Gucci = () => {
  return (
    <div className=' mb-10'>
      <figure className='w-1/2 m-auto'>
        <img src='https://i.ibb.co/ZGRXx8K/peakpx-3.jpg' alt='gucci' />
      </figure>
      <div className='card-body space-y-5'>
        <p className='text-sm font-medium'>
          Gucci, a name synonymous with luxury, craftsmanship, and timeless
          elegance, is a beacon of fashion excellence. Since its inception in
          Florence in 1921, Gucci has captivated the world with its iconic
          double-G logo and innovative designs. Gucci is pieces are more than
          just fashion; they are art. Each creation represents a fusion of
          tradition and innovation. The brands commitment to quality materials
          and meticulous handcrafting ensures that every product exudes
          sophistication. From the iconic Bamboo Bag to the sleek Ace Sneakers,
          Gucci has become a status symbol, beloved by celebrities and fashion
          enthusiasts worldwide. Gucci embraces individuality, encouraging
          people to express themselves through their unique style. In the realm
          of sustainability, Gucci is a trailblazer, with a bold vision to
          create a more responsible and inclusive fashion industry. In essence,
          Gucci is more than a fashion house; its a legacy of luxury,
          creativity, and a commitment to a better future. Embrace the allure of
          Gucci, where every piece tells a story of elegance and innovation.
        </p>
        <Link
          to='/gucci-products'
          className='m-auto w-full justify-center flex'
        >
          <button className='btn  w-3/4 text-xl font-bold hover:bg-gray-400'>
            Explore Gucci
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Gucci;
