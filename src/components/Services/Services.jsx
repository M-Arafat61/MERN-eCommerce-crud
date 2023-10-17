import { Tb12Hours } from "react-icons/tb";
import { FaShippingFast } from "react-icons/fa";
import { MdAssignmentReturn } from "react-icons/md";
import { RiShoppingBasketLine } from "react-icons/ri";

const Services = () => {
  return (
    <div className=' p-2 md:p-10'>
      <hr />
      <div className='grid grid-cols-2  gap-5 justify-center p-5'>
        <div className='flex items-center justify-center'>
          <Tb12Hours className='text-3xl'></Tb12Hours>
          <p className='text-xl font-medium'>24/7 customer support</p>
        </div>
        <div className='flex items-center justify-center'>
          <FaShippingFast className='text-3xl'></FaShippingFast>
          <p className='text-xl font-medium'>Free shipping over $50</p>
        </div>
        <div className='flex items-center justify-center'>
          <MdAssignmentReturn className='text-3xl'></MdAssignmentReturn>
          <p className='text-xl font-medium'>Free returns up to 30 days</p>
        </div>
        <div className='flex items-center justify-center'>
          <RiShoppingBasketLine className='text-3xl'></RiShoppingBasketLine>
          <p className='text-xl font-medium'>Secure & worry free shopping</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Services;
