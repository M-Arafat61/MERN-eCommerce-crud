import { useLoaderData } from "react-router-dom";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import { useState } from "react";
import CartCard from "./CartCard";

const MyCart = () => {
  const cartProducts = useLoaderData();
  const [cart, setCart] = useState(cartProducts);

  return (
    <div className='max-w-6xl m-auto space-y-10'>
      <Navbar></Navbar>

      <div className='flex gap-2 justify-center items-center'>
        <div className='w-1 bg-cyan-500 h-20 '></div>
        <h2 className='text-3xl font-bold'>Added items: {cart.length}</h2>
      </div>
      <div className='grid grid-cols-3 gap-5'>
        {cart.map(item => (
          <CartCard
            key={item._id}
            item={item}
            cart={cart}
            setCart={setCart}
          ></CartCard>
        ))}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MyCart;
