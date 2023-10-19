import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  // const { id } = useParams();
  const product = useLoaderData();
  const { description, image, name, price, type } = product;

  const cartInfo = { name, type, description, image, price };

  const handleAddCart = () => {
    console.log("object");
    fetch("http://localhost:5000/userCart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartInfo),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Product added successfully", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  };

  return (
    <div className='max-w-6xl m-auto space-y-10'>
      <Navbar></Navbar>
      {/* card */}
      <div className='relative flex flex-col shadow-sm w-3/4 m-auto rounded-xl bg-clip-border'>
        <div className='relative mx-4 mt-4 overflow-hidden  bg-white h-96 rounded-xl bg-clip-border'>
          <img src={image} className='object-cover w-full h-full' />
        </div>
        <div className='p-6'>
          <div className='flex items-center justify-between mb-2'>
            <p className='block font-sans text-xl antialiased font-bold leading-relaxed text-gray-900'>
              {name}
            </p>
            <p className='block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900'>
              ${price}
            </p>
          </div>
          <p className='block font-sans text-lg antialiased font-bold leading-relaxed text-gray-900'>
            {type}
          </p>
          <p className='block font-sans text-md antialiased font-medium leading-normal'>
            {description}
          </p>
        </div>
        <div className='p-6 pt-0'>
          <Link onClick={handleAddCart}>
            <button
              className='block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-lg btn font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              type='button'
            >
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ProductDetails;
