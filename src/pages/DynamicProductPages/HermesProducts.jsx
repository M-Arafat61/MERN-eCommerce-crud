import { Link, useLoaderData } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";

const HermesProducts = () => {
  const hermesProducts = useLoaderData();
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
              className='h-[650px] object-cover'
              src='https://i.ibb.co/P4FHw6L/pexels-nhung-tran-16690455.jpg'
              alt='Slide 1'
            />
          </div>
          <div>
            <img
              className='h-[650px] object-cover'
              src='https://i.ibb.co/VCrjfNr/beach-skincare-product-still-life.jpg'
              alt='Slide 2'
            />
          </div>
          <div>
            <img
              className='h-[650px] object-cover'
              src='https://i.ibb.co/d2828NC/cosmetic-male-beauty-products-with-display.jpg'
              alt='Slide 3'
            />
          </div>
        </Carousel>

        <div>
          {hermesProducts?.map(product => (
            <div key={product._id}>
              <div className='card  w-3/4 m-auto bg-base-100 shadow-md mb-10'>
                <figure>
                  <img
                    className='h-[500px] w-full object-cover'
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
                    <button className='btn text-lg font-bold w-1/2'>
                      Details
                    </button>
                    <button className='btn text-lg font-bold w-1/2'>
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          : (
          <p className='text-center p-2 md:p-10 text-2xl font-semibold'>
            No products available right now! You can add product from
            <span>
              <Link to='/add-products'>
                <button className='p-2 text-cyan-400  btn-group'>
                  add product{" "}
                </button>
              </Link>
            </span>
            page.
          </p>
          )
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HermesProducts;
