import PropTypes from "prop-types";
import Swal from "sweetalert2";

const CartCard = ({ item, cart, setCart }) => {
  const { _id, image, name, price } = item;
  //   console.log(cart);
  const handleRemove = _id => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then(result => {
      if (result.isConfirmed) {
        fetch(
          `https://elite-ensemble-emporium-server-lq165v8ny.vercel.app/cart/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Removed!", "Item has been removed.", "success");
              const remaining = cart.filter(cart => cart._id !== _id);
              setCart(remaining);
            }
          });
      }
    });
  };

  return (
    <div className='p-5'>
      <div className='card card-compact  bg-base-100 shadow-md '>
        <figure>
          <img
            className='w-[300px] h-[280px] object-cover'
            src={image}
            alt='cart image'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{name}</h2>
          <p>${price}</p>
          <div className='card-actions '>
            <button
              onClick={() => handleRemove(_id)}
              className='btn btn-warning'
            >
              Remove Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CartCard.propTypes = {
  item: PropTypes.object,
  cart: PropTypes.array,
  setCart: PropTypes.func,
};

export default CartCard;
