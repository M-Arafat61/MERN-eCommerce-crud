import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";

const AddProducts = () => {
  const handleAddProducts = e => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const newProducts = {
      image,
      name,
      brand,
      type,
      price,
      description,
      rating,
    };
    console.log(newProducts);

    fetch("http://localhost:5000/addProducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProducts),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

  return (
    <div className='max-w-6xl m-auto'>
      <Navbar></Navbar>
      <div className='mt-10 mb-10 flex items-center justify-center space-x-3'>
        <div className='h-20 bg-gray-500 w-1 '></div>
        <p className='text-4xl font-bold'>Add Desired Products</p>
      </div>
      <div className='hero mb-20 p-5'>
        <div className='card flex-shrink-0 w-full md:w-3/4 bg-base-200'>
          <form
            onSubmit={handleAddProducts}
            className='card-body w-full md:w-3/4 m-auto'
          >
            {/* input field */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Image</span>
              </label>
              <input
                name='image'
                type='text'
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
                placeholder='Price'
                className='input input-bordered'
                required
              />
            </div>
            {/* input field */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Description</span>
              </label>
              <input
                name='description'
                type='text'
                placeholder='Description'
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
                placeholder='Rating'
                className='input input-bordered'
                required
              />
            </div>

            <div className='form-control mt-6'>
              <input
                type='submit'
                className='btn btn-primary text-lg font-bold'
                value='Add Product'
              />
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddProducts;
