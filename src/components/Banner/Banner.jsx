import { TbSignature } from "react-icons/tb";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: "mobile",
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: true,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,

      offset: 300,
      delay: 100,

      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div className='flex flex-col-reverse md:flex-row items-center justify-center mb-10 p-5 dark:bg-dark dark:text-light'>
      <div
        data-aos='fade-right'
        className=' flex flex-col items-center text-center w-full md:w-4/12 italic'
      >
        <p>Fashion that Speaks Louder than Words</p>
        <p> Discover Versatility</p>
        <p>Elevate Your Everyday with Our Fashion Essentials</p>
        <TbSignature className='text-2xl' />
      </div>
      <div data-aos='zoom-in' className='w-full p-6 md:p-2 m-auto md:w-4/12'>
        <img src='https://i.ibb.co/m0pY37k/dress-shop-97261-1280.jpg' alt='' />
      </div>
      <div data-aos='fade-left' className='hidden md:flex w-4/12 ml-2 '>
        <img
          className='md:h-80 object-cover'
          src='https://i.ibb.co/gtDDcwg/shopping-4000414-1280.jpg'
          alt=''
        />
      </div>
    </div>
  );
};

export default Banner;
