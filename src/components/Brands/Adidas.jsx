import { Link } from "react-router-dom";

const Adidas = () => {
  return (
    <div className='card mb-10'>
      <figure className='w-3/4 md:w-1/2 m-auto'>
        <img
          className='w-full h-64'
          src='https://i.ibb.co/tCHr2yZ/peakpx-2.jpg'
          alt='adidas'
        />
      </figure>
      <div className='card-body space-y-5'>
        <p className='text-sm font-medium'>
          Adidas, founded in 1949, is a pioneering force in sportswear. Renowned
          for its iconic trefoil logo and three-striped design, Adidas merges
          performance with style. Collaborations with cultural icons, like Kanye
          West and Beyoncé, have propelled the brand to prominence. Adidas
          embraces sustainability, crafting a lifestyle blending sport, fashion,
          and environmental responsibility.
        </p>
        <Link
          to='adidas-products'
          className='m-auto w-full justify-center flex'
        >
          <button className='btn  w-3/4 text-xl font-bold hover:bg-gray-400'>
            Explore Adidas
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Adidas;
