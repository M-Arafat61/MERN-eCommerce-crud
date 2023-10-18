import { Link } from "react-router-dom";

const Nike = () => {
  return (
    <>
      <div className='mt-10 mb-10 flex flex-col items-center justify-center space-y-3'>
        <p className='text-4xl font-bold'>Explore Global Brands </p>
        <div className='w-48 bg-gray-500 h-1 '></div>
      </div>
      <div className=' mb-10'>
        <figure className='w-1/2 m-auto'>
          <img src='https://i.ibb.co/W03Jszv/peakpx.jpg' alt='Nike' />
        </figure>
        <div className='card-body space-y-5'>
          <p className='text-sm font-medium'>
            Nike, an iconic global brand, epitomizes the perfect blend of
            innovation, style, and athletic excellence. Since its inception in
            1964 as Blue Ribbon Sports, Nike has consistently set the benchmark
            for sports apparel and footwear. The distinctive Nike Swoosh logo is
            an emblem of excellence recognized worldwide. What sets Nike apart
            is its unwavering commitment to cutting-edge technology and a stable
            of elite athlete collaborations, including legends like Michael
            Jordan and Serena Williams.
          </p>
          <Link className='m-auto w-full justify-center flex'>
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
