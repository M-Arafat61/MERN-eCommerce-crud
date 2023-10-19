import { Link } from "react-router-dom";

const Nike = () => {
  return (
    <>
      <div className=' mb-10'>
        <figure className='w-3/4 md:w-1/2 m-auto'>
          <img
            className='w-full h-64'
            src='https://i.ibb.co/W03Jszv/peakpx.jpg'
            alt='Nike'
          />
        </figure>
        <div className='card-body space-y-5'>
          <p className='text-sm font-medium'>
            Nike, a global icon since 1964, combines innovation, style, and
            athletic excellence. Its distinctive Swoosh logo symbolizes
            worldwide excellence. What distinguishes Nike is its commitment to
            cutting-edge technology and elite athlete collaborations, including
            legends like Michael Jordan and Serena Williams.
          </p>
          <Link
            to='/nike-products'
            className='m-auto w-full justify-center flex'
          >
            <button className='btn  w-3/4 text-xl font-bold hover:bg-gray-400'>
              Explore Nike
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nike;
