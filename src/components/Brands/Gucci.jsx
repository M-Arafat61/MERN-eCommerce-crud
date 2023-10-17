import { Link } from "react-router-dom";

const Gucci = () => {
  return (
    <div className='card card-side mb-10'>
      <figure className=''>
        <img src='https://i.ibb.co/ZGRXx8K/peakpx-3.jpg' alt='gucci' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title text-3xl'>Gucci</h2>
        <p>MEMBER DAYS SALE | 20% OFF SELECT STYLES</p>
        <Link className='card-actions'>
          <button className='btn btn-primary'>Gucci</button>
        </Link>
      </div>
    </div>
  );
};

export default Gucci;
