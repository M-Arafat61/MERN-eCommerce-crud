import { Link } from "react-router-dom";

const Hermes = () => {
  return (
    <div className='card card-side mb-10'>
      <figure className=''>
        <img src='https://i.ibb.co/QfBg6VK/peakpx-5.jpg' alt='H&M' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title text-3xl'>H&M</h2>
        <p>MEMBER DAYS SALE | 20% OFF SELECT STYLES</p>
        <Link className='card-actions'>
          <button className='btn btn-primary'>Nike</button>
        </Link>
      </div>
    </div>
  );
};

export default Hermes;
