import { Link } from "react-router-dom";

const Zara = () => {
  return (
    <div className=' mb-10'>
      <figure className='w-1/2 m-auto'>
        <img src='https://i.ibb.co/8zpphvG/pexels-burak-ba-g-ze-15673588-1.jpg' />
      </figure>
      <div className='card-body space-y-5'>
        <p className='text-sm font-medium'>
          Zara, a beacon of fast fashion, redefines style and affordability.
          Founded in Spain in 1974, its a global fashion powerhouse. Zara is
          approach is all about making the latest trends accessible to all, with
          a stunning array of clothing and accessories that cater to diverse
          tastes. What sets Zara apart is its unparalleled speed in bringing
          runway trends to the masses. New collections arrive in stores within
          weeks, ensuring you are always ahead in style. The brands signature
          minimalist aesthetic and commitment to sustainability strike a chord
          with conscious consumers. Zara is the go-to for fashion-forward
          individuals who crave quality without breaking the bank. Experience
          the thrill of ever-evolving style with Zara, where you are always at
          the forefront of fashion.
        </p>
        <Link className='m-auto w-full justify-center flex'>
          <button className='btn  w-3/4 text-xl font-bold hover:bg-gray-400'>
            Explore Zara
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Zara;
