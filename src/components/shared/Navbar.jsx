import { Link, NavLink } from "react-router-dom";
import { GiDreamCatcher } from "react-icons/gi";
import useAuthContext from "../../hooks/useAuth";

const Navbar = () => {
  const { user } = useAuthContext();
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
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-36'
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
        <div className='flex items-center gap-1'>
          <GiDreamCatcher className='text-4xl'></GiDreamCatcher>
          <h3 className='font-semibold'>Elite Emporium</h3>
        </div>
      </div>
      <div className='hidden md:flex navbar-center'>
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
        {user && user?.protoURL !== null ? (
          <>
            <div className='flex flex-col items-end'>
              <label tabIndex='0' className='btn btn-ghost btn-circle avatar'>
                <div className='w-12 rounded-full'>
                  <img src={user?.photoURL} />
                </div>
              </label>

              <p className='text-lg'>{user.displayName}</p>
              <Link>
                <button className='btn btn-ghost'>Logout</button>
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
