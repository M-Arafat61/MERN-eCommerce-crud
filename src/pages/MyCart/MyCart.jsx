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

      <div>
        <h2>Added items: {cart.length}</h2>
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
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyCart;
