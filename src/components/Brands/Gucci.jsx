import { Link } from "react-router-dom";

const Gucci = () => {
  return (
    <div className=' mb-10'>
      <figure className='w-3/4 md:w-1/2 m-auto'>
        <img
          className='w-full h-64'
          src='https://i.ibb.co/ZGRXx8K/peakpx-3.jpg'
          alt='gucci'
        />
      </figure>
      <div className='card-body space-y-5'>
        <p className='text-sm font-medium'>
          Gucci, since 1921, embodies luxury, craftsmanship, and iconic style.
          Meticulous handcrafting and quality materials result in
          sophistication. From Bamboo Bags to Ace Sneakers, Gucci is a
          celebrity-loved status symbol. It encourages individuality and leads
          in sustainability, aiming for a responsible fashion industry. A legacy
          of luxury and innovation.
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
