import { Link, NavLink } from "react-router-dom";

import useAuthContext from "../../hooks/useAuth";
import { BsHeadset } from "react-icons/bs";
const Navbar = () => {
  const { user, handleUserLogOut } = useAuthContext();
  return (
    <div className='navbar bg-base-100 p-2 md:p-5'>
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
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-36'
          >
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/add-products'>Add Product</Link>
            </li>
            <li>
              <Link to='/cart'>My Cart</Link>
            </li>
          </ul>
        </div>
        <div className='hidden md:flex flex-col ml-2 text-gray-500'>
          <p className='text-md '>24/7 customer support</p>
          <div className='flex items-center'>
            <BsHeadset className='text-lg' />
            <p>+88-0927-3353</p>
          </div>
        </div>
      </div>
      <div className='navbar-center flex-col '>
        <div className='flex flex-col md:flex-row items-center gap-1'>
          <img className='w-12' src='https://i.ibb.co/5rYWrW8/cap.png' alt='' />
          <h3 className='font-bold text-lg'>Elite Emporium</h3>
        </div>
        <div className='hidden md:flex'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive
                ? "btn btn-ghost normal-case text-xl  font-semibold "
                : "btn-ghost btn"
            }
          >
            Home
          </NavLink>
          <NavLink
            to='/add-products'
            className={({ isActive }) =>
              isActive
                ? "btn btn-ghost normal-case text-xl  font-semibold "
                : "btn-ghost btn"
            }
          >
            Add Product
          </NavLink>
          <NavLink
            to='/cart'
            className={({ isActive }) =>
              isActive
                ? "btn btn-ghost normal-case text-xl  font-semibold "
                : "btn-ghost btn"
            }
          >
            My Cart
          </NavLink>
        </div>
      </div>

      {/* Navbar end */}
      <div className='navbar-end pl-5 md:pl-0'>
        {user && user?.protoURL !== null ? (
          <>
            <div className='flex flex-col flex-wrap-reverse text-end justify-end'>
              <label tabIndex='0' className='btn btn-ghost btn-circle avatar'>
                <div className='w-12 rounded-full'>
                  <img src={user?.photoURL} />
                </div>
              </label>

              <p className='text-sm md:text-lg font-medium'>
                {user.displayName}
              </p>
              <Link>
                <button
                  onClick={handleUserLogOut}
                  className='text-sm   hover:btn-outline btn btn-ghost font-medium'
                >
                  Logout
                </button>
              </Link>
            </div>
          </>
        ) : (
          // <img src={Avatar} />
          <Link to='/login'>
            <button className='btn btn-outline '>Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
