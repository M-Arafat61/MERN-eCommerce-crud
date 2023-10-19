const Articles = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center mb-10 space-y-5'>
        <h3 className='text-4xl text-center font-bold'>Latest Articles</h3>
        <div className='w-32 bg-gray-500 h-1 '></div>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
        {/* card */}
        <div className='relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border mb-10'>
          <div className='relative mx-4 mt-4 overflow-hidden text-gray-700 bg-base-100 shadow-lg h-80 rounded-xl bg-clip-border'>
            <img
              src='https://i.ibb.co/wRXSt6F/pexels-vova-kras-2726161.jpg'
              alt='profile-picture'
            />
          </div>
          <div className='p-6 text-center'>
            <h4 className='block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900'>
              Choose the best outfit
            </h4>
            <p className='block font-sans text-base antialiased font-medium leading-relaxed text-transparent text-black bg-clip-text'>
              Wednesday, October 18, 2023
            </p>
          </div>
        </div>
        {/* card */}
        <div className='relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border mb-10'>
          <div className='relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border'>
            <img
              src='https://i.ibb.co/RvFLXry/pexels-jack-winbow-1457983.jpg'
              alt='profile-picture'
            />
          </div>
          <div className='p-6 text-center'>
            <h4 className='block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900'>
              Follow world style with us
            </h4>
            <p className='block font-sans text-base antialiased font-medium leading-relaxed text-transparent text-black bg-clip-text'>
              Wednesday, October 19, 2023
            </p>
          </div>
        </div>
        {/* card */}
        <div className='relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border mb-10'>
          <div className='relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border'>
            <img
              src='https://i.ibb.co/ZMbD2rN/pexels-athena-2043590.jpg'
              alt='profile-picture'
            />
          </div>
          <div className='p-6 text-center'>
            <h4 className='block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900'>
              Be trendy with being yourself
            </h4>
            <p className='block font-sans text-base antialiased font-medium leading-relaxed text-transparent text-black bg-clip-text'>
              Wednesday, October 20, 2023
            </p>
          </div>
        </div>
        {/* card */}
        <div className='relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border mb-10'>
          <div className='relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border'>
            <img
              src='https://i.ibb.co/JQ8rL9f/pexels-yuliya-kosolapova-3270230.jpg'
              alt='profile-picture'
            />
          </div>
          <div className='p-6 text-center'>
            <h4 className='block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900'>
              Maintain best care of skin
            </h4>
            <p className='block font-sans text-base antialiased font-medium leading-relaxed text-transparent text-black bg-clip-text'>
              Wednesday, October 21, 2023
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;
