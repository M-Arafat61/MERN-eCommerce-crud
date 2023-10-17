import { Link } from "react-router-dom";

const Zara = () => {
  return (
    <div className='card card-side mb-10'>
      <figure className=''>
        <img
          src='https://i.ibb.co/HFnkKLJ/17652c15837939-562979668f0e4zara.jpg'
          alt='gucci'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title text-3xl'>Zara</h2>
        <p>MEMBER DAYS SALE | 20% OFF SELECT STYLES</p>
        <Link className='card-actions'>
          <button className='btn btn-primary'>Zara</button>
        </Link>
      </div>
    </div>
  );
};

export default Zara;
