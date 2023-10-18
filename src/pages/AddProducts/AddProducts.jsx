import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";

const AddProducts = () => {
  return (
    <div className='max-w-6xl m-auto'>
      <Navbar></Navbar>
      <div className='mt-10 mb-10 flex items-center justify-center space-x-3'>
        <div className='h-20 bg-gray-500 w-1 '></div>
        <p className='text-4xl font-bold'>Add Desired Products</p>
      </div>
      <div className='hero mb-20'>
        <div className='card flex-shrink-0 w-3/4 bg-base-200'>
          <form className='card-body w-3/4 m-auto'>
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
                type='number'
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
                type='number'
                placeholder='Rating'
                className='input input-bordered'
                required
              />
            </div>

            <div className='form-control mt-6'>
              <button className='btn btn-primary'>Add Product</button>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddProducts;
