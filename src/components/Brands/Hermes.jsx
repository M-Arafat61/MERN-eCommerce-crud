import { Link } from "react-router-dom";

const Hermes = () => {
  return (
    <>
      <div className=' mb-10'>
        <figure className='w-3/4 md:w-1/2 m-auto'>
          <img
            className='w-full h-64'
            src='https://i.ibb.co/QfBg6VK/peakpx-5.jpg'
          />
        </figure>
        <div className='card-body space-y-5'>
          <p className='text-sm font-medium'>
            Hermès, synonymous with timeless luxury since 1837, captivates with
            Parisian elegance and impeccable craftsmanship. From iconic bags to
            silk scarves, each creation is a work of art, handcrafted for
            unparalleled quality. It embodies refined taste and sophistication,
            offering the epitome of timeless style and unmatched class.
          </p>
          <Link
            to='/hermes-products'
            className='m-auto w-full justify-center flex'
          >
            <button className='btn  w-3/4 text-xl font-bold hover:bg-gray-400'>
              Explore Hermes
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hermes;
