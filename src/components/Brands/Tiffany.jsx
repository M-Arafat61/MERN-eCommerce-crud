import { Link } from "react-router-dom";

const Tiffany = () => {
  return (
    <div className='card card-side mb-10'>
      <figure className=''>
        <img
          src='https://i.ibb.co/N94YmKM/10-tiffany-and-co-merylla-zenby.jpg'
          alt='Tiffany'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title text-3xl'>Tiffany</h2>
        <p>MEMBER DAYS SALE | 20% OFF SELECT STYLES</p>
        <Link className='card-actions'>
          <button className='btn btn-primary'>Tiffany</button>
        </Link>
      </div>
    </div>
  );
};

export default Tiffany;
