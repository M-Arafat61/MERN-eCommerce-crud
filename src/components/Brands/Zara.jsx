import { Link } from "react-router-dom";

const Zara = () => {
  return (
    <div className=' mb-10'>
      <figure className='w-3/4 md:w-1/2 m-auto'>
        <img
          className='w-full h-64'
          src='https://i.ibb.co/8zpphvG/pexels-burak-ba-g-ze-15673588-1.jpg'
        />
      </figure>
      <div className='card-body space-y-5'>
        <p className='text-sm font-medium'>
          Zara, founded in 1974, is a global fashion icon, redefining style and
          affordability. Known for its fast fashion, Zara swiftly brings runway
          trends to the masses. Its minimalist aesthetic and commitment to
          sustainability appeal to conscious consumers, offering quality fashion
          that keeps you ahead in style without breaking the bank.
        </p>
        <Link to='/zara-products' className='m-auto w-full justify-center flex'>
          <button className='btn  w-3/4 text-xl font-bold hover:bg-gray-400'>
            Explore Zara
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Zara;
