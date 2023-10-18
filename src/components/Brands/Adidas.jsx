import { Link } from "react-router-dom";

const Adidas = () => {
  return (
    <div className='card mb-10'>
      <figure className='w-1/2 m-auto'>
        <img src='https://i.ibb.co/tCHr2yZ/peakpx-2.jpg' alt='adidas' />
      </figure>
      <div className='card-body space-y-5'>
        <p className='text-sm font-medium'>
          Adidas, a name synonymous with sportswear excellence, has been a
          trailblazer since its inception in 1949. This iconic brand has
          redefined athletic fashion, effortlessly merging performance and
          style. The trefoil logo and the three-striped design are iconic
          symbols of quality and innovation. Adidas continually pushes
          boundaries with cutting-edge technologies, producing sneakers and
          apparel that redefine comfort and performance. Collaborations with
          sports legends such as Kanye West and Beyoncé have elevated Adidas to
          a cultural phenomenon. The brands Originals line perfectly fuses
          heritage with contemporary trends. Adidas embodies a commitment to
          sustainability, striving to create a positive impact on the
          environment. In summary, Adidas is not just a brand; its a lifestyle
          that encapsulates sport, fashion, and a sustainable future.
        </p>
        <Link
          to='adidas-products'
          className='m-auto w-full justify-center flex'
        >
          <button className='btn  w-3/4 text-xl font-bold hover:bg-gray-400'>
            Explore Adidas
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Adidas;
