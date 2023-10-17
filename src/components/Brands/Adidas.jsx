import { Link } from "react-router-dom";

const Adidas = () => {
  return (
    <div className='card mb-10'>
      <figure>
        <img src='https://i.ibb.co/tCHr2yZ/peakpx-2.jpg' alt='adidas' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>Adidas</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <Link className='card-actions '>
          <button className='btn btn-primary'>Adidas</button>
        </Link>
      </div>
    </div>
  );
};

export default Adidas;
