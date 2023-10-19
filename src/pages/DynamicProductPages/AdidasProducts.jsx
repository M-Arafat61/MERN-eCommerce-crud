import { Carousel } from "react-responsive-carousel";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
import { Link, useLoaderData } from "react-router-dom";

const AdidasProducts = () => {
  const adidasProducts = useLoaderData();
  return (
    <div>
      <div className='max-w-6xl m-auto space-y-10'>
        <Navbar></Navbar>

        <Carousel
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
        >
          <div>
            <img
              className='md:h-[650px] object-cover'
              src='https://i.ibb.co/LSFmtjr/pexels-kaique-rocha-48013.jpg'
              alt='Slide 1'
            />
          </div>
          <div>
            <img
              className='md:h-[650px] object-cover'
              src='https://i.ibb.co/mShTRST/pexels-pixabay-39362.jpg'
              alt='Slide 2'
            />
          </div>
          <div>
            <img
              className='md:h-[650px] object-cover'
              src='https://i.ibb.co/BBk2kmk/pexels-rafa-de-345415.jpg'
              alt='Slide 3'
            />
          </div>
        </Carousel>

        <div className='grid md:grid-cols-2 gap-5 '>
          {adidasProducts.map(product => (
            <div key={product._id}>
              <div className='card w-3/4 m-auto bg-base-100 shadow-md mb-10'>
                <figure>
                  <img
                    className='h-[300px] md:h-[500px] w-full object-cover'
                    src={product.image}
                    alt='Shoes'
                  />
                </figure>
                <div className='card-body'>
                  <p className='text-lg font-medium'>Product: {product.name}</p>
                  <h2 className='card-title text-xl font-bold'>
                    Brand: {product.brand}
                  </h2>
                  <p className='text-md font-medium'>{product.description}</p>
                  <p className='text-lg font-medium'>
                    Rating: {product.rating}/5
                  </p>
                  <p className='text-lg font-medium'>Price: ${product.price}</p>
                  <div className='flex justify-between items-center gap-2 '>
                    <Link
                      to={`/products/${product._id}`}
                      className='btn text-lg font-bold w-1/2'
                    >
                      Details
                    </Link>
                    <Link
                      to={`/update-product/${product._id}`}
                      className='btn text-lg font-bold w-1/2'
                    >
                      Update
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AdidasProducts;
