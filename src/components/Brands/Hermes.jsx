import { Link } from "react-router-dom";

const Hermes = () => {
  return (
    <>
      <div className=' mb-10'>
        <figure className='w-1/2 m-auto'>
          <img src='https://i.ibb.co/QfBg6VK/peakpx-5.jpg' />
        </figure>
        <div className='card-body space-y-5'>
          <p className='text-sm font-medium'>
            Hermès, the epitome of timeless luxury, has enchanted the world with
            its exquisite craftsmanship and Parisian elegance since 1837. This
            illustrious fashion house, known for its iconic orange boxes and
            impeccable quality, transcends trends and stands as an enduring
            symbol of opulence. From the iconic Birkin and Kelly bags to the
            silk scarves and ready-to-wear collections, every Hermès creation is
            a work of art. The brands dedication to artisanal expertise, with
            skilled craftsmen handcrafting each piece, ensures unparalleled
            quality. Hermès is not just a fashion statement; its an embodiment
            of refined taste and sophistication. A status symbol coveted by the
            fashion elite, it offers a glimpse into the world of timeless style
            and unmatched class. Experience the epitome of luxury with Hermès –
            where elegance knows no bounds.
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
