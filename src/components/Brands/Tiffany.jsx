import { Link } from "react-router-dom";

const Tiffany = () => {
  return (
    <div className='mb-10'>
      <figure className='w-1/2  m-auto'>
        <img
          className=''
          src='https://i.ibb.co/KLXMQCf/5f9a9e4d69331a0011bc5f8b.webp'
        />
      </figure>
      <div className='card-body space-y-5'>
        <p className='text-sm font-medium'>
          Tiffany & Co., a name synonymous with elegance and enduring love, has
          enchanted the world since its founding in 1837. The iconic Tiffany
          Blue Box has become a symbol of luxury and romance. Tiffany is mastery
          of fine jewelry and silverware is legendary, from their legendary
          engagement rings to their timeless designs like the Tiffany T
          collection. Each piece embodies the spirit of exceptional
          craftsmanship and sophistication. A trip to Tiffany is flagship store
          on Fifth Avenue in New York is an experience in itself, where dreams
          are realized and memories are made. Tiffany & Co. is more than
          jewelry; its a testament to life special moments and the enduring
          power of love. Indulge in the timeless allure of Tiffany and
          experience elegance at its finest.
        </p>
        <Link className='m-auto w-full justify-center flex'>
          <button className='btn  w-3/4 text-xl font-bold hover:bg-gray-400'>
            Explore Tiffany
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Tiffany;
