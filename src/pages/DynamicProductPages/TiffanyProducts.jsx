import { Carousel } from "react-responsive-carousel";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
import { Link, useLoaderData } from "react-router-dom";

const TiffanyProducts = () => {
  const tiffanyProducts = useLoaderData();

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
              src='https://i.ibb.co/HCX6KqP/Peretti-Bone-Bean-On-Fig-Mktg-Tile-6.webp'
              alt='Slide 1'
            />
          </div>
          <div>
            <img
              className='h-[650px] object-cover'
              src='https://i.ibb.co/X8F9JF3/2023-LOCK2.webp'
              alt='Slide 2'
            />
          </div>
          <div>
            <img
              className='h-[650px] object-cover'
              src='https://i.ibb.co/k4jsdDw/Peretti-Bone-Bean-On-Fig-Mktg-Tile-4.webp'
              alt='Slide 3'
            />
          </div>
        </Carousel>

        <div>
          {tiffanyProducts.map(product => (
            <div key={product._id}>
              <div className='card  w-3/4 m-auto bg-base-100 shadow-md mb-10'>
                <figure>
                  <img
                    className='h-[500px] w-full object-cover '
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

export default TiffanyProducts;
