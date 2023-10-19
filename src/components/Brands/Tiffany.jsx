import { Link } from "react-router-dom";

const Tiffany = () => {
  return (
    <div className='mb-10'>
      <figure className='w-3/4 md:w-1/2  m-auto'>
        <img
          className='w-full h-64'
          src='https://i.ibb.co/KLXMQCf/5f9a9e4d69331a0011bc5f8b.webp'
        />
      </figure>
      <div className='card-body space-y-5'>
        <p className='text-sm font-medium'>
          Tiffany & Co., founded in 1837, epitomizes elegance and love with its
          iconic Blue Box symbolizing luxury and romance. Renowned for fine
          jewelry, including engagement rings and the Tiffany T collection, each
          piece showcases exceptional craftsmanship. Tiffany celebrates life is
          special moments with enduring love and timeless elegance.
        </p>
        <Link
          to='/tiffany-products'
          className='m-auto w-full justify-center flex'
        >
          <button className='btn  w-3/4 text-xl font-bold hover:bg-gray-400'>
            Explore Tiffany
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Tiffany;
