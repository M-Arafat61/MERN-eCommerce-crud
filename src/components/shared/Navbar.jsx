import { Link, NavLink } from "react-router-dom";
import { GiDreamCatcher } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown md:hidden'>
          <label tabIndex={0} className='btn btn-ghost btn-circle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 '
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h7'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a> Add Product</a>
            </li>
            <li>
              <a> My Cart</a>
            </li>
          </ul>
        </div>
        <div className='flex items-center'>
          <GiDreamCatcher className='text-4xl'></GiDreamCatcher>
          <h3 className='font-semibold'>Elite Emporium</h3>
        </div>
      </div>
      <div className='navbar-center'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive
              ? "btn btn-ghost normal-case text-xl underline font-semibold "
              : "btn-ghost btn"
          }
        >
          Home
        </NavLink>
        <NavLink
          to='/registered-sessions'
          className={({ isActive }) =>
            isActive
              ? "btn btn-ghost normal-case text-xl underline text-white font-semibold "
              : "btn-ghost btn"
          }
        >
          Add Product
        </NavLink>
        <NavLink
          to='/registered-sessions'
          className={({ isActive }) =>
            isActive
              ? "btn btn-ghost normal-case text-xl underline text-white font-semibold "
              : "btn-ghost btn"
          }
        >
          My Cart
        </NavLink>
      </div>

      {/* Navbar end */}
      <div className='navbar-end'>
        {/* <button className='btn btn-ghost btn-circle'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </button> */}
        <Link to='/login'>
          <button className='btn btn-outline btn-secondary'>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
