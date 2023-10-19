import { TbSignature } from "react-icons/tb";

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center mt-10 mb-10'>
      <div className='flex flex-col items-center text-center w-full md:w-4/12 text-base italic'>
        <p>Fashion that Speaks Louder than Words</p>
        <p> Discover Versatility</p>
        <p>Elevate Your Everyday with Our Fashion Essentials</p>
        <TbSignature className='text-2xl' />
      </div>
      <div className='w-full p-6 m-auto md:w-4/12'>
        <img src='https://i.ibb.co/m0pY37k/dress-shop-97261-1280.jpg' alt='' />
      </div>
      <div className='hidden md:flex w-4/12 ml-5 '>
        <img
          className='md:h-96 object-cover'
          src='https://i.ibb.co/gtDDcwg/shopping-4000414-1280.jpg'
          alt=''
        />
      </div>
    </div>
  );
};

export default Banner;
