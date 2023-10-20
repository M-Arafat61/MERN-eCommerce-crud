import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";
import Swal from "sweetalert2";
import Footer from "../../components/shared/Footer";

const UpdateProducts = () => {
  const product = useLoaderData();

  const { _id, brand, rating, image, name, price, type } = product;
  //   console.log(product);

  const handleUpdateProduct = event => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const image = form.image.value;
    const rating = form.rating.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const type = form.type.value;

    const updatedProduct = { image, name, brand, type, price, rating };

    fetch(
      `https://elite-ensemble-emporium-server-lq165v8ny.vercel.app/update-product/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Successfully updated",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className='max-w-6xl m-auto space-y-10'>
      <Navbar></Navbar>
      <div>
        <h2 className='text-center font-bold text-3xl'>
          Update {brand} product
        </h2>
      </div>
      <div className='hero mb-20'>
        <div className='card flex-shrink-0 w-3/4 bg-base-200'>
          <form
            onSubmit={handleUpdateProduct}
            className='card-body w-3/4 m-auto'
          >
            {/* input field */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Image</span>
              </label>
              <input
                name='image'
                type='text'
                defaultValue={image}
                placeholder='Image'
                className='input input-bordered'
                required
              />
            </div>
            {/* input field */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                name='name'
                type='text'
                defaultValue={name}
                placeholder='Name'
                className='input input-bordered'
                required
              />
            </div>
            {/* input field */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Brand name</span>
              </label>
              <input
                name='brand'
                type='text'
                defaultValue={brand}
                placeholder='Brand'
                className='input input-bordered'
                required
              />
            </div>
            {/* input field */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Product type</span>
              </label>
              <input
                name='type'
                type='text'
                defaultValue={type}
                placeholder='Type'
                className='input input-bordered'
                required
              />
            </div>
            {/* input field */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Price</span>
              </label>
              <input
                type='text'
                name='price'
                defaultValue={price}
                placeholder='Price'
                className='input input-bordered'
                required
              />
            </div>

            {/* input field */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Rating</span>
              </label>
              <input
                name='rating'
                type='text'
                defaultValue={rating}
                placeholder='Rating'
                className='input input-bordered'
                required
              />
            </div>

            <div className='form-control mt-6'>
              <input
                type='submit'
                className='btn btn-primary text-lg font-bold'
                value='Update Product'
              />
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default UpdateProducts;
