import { Link } from "react-router-dom";

const Nike = () => {
  return (
    <div className='card card-side mb-10'>
      <figure className=''>
        <img src='https://i.ibb.co/W03Jszv/peakpx.jpg' alt='Nike' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title text-3xl'>Nike</h2>
        <p>MEMBER DAYS SALE | 20% OFF SELECT STYLES</p>
        <Link className='card-actions'>
          <button className='btn btn-primary'>Nike</button>
        </Link>
      </div>
    </div>
  );
};

export default Nike;
