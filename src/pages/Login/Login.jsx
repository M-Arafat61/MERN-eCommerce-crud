// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
import SocialLogin from "../../components/shared/SocialLogin";
import useAuthContext from "../../hooks/useAuth";
import { useState } from "react";

const Login = () => {
  const { userLogin } = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  console.log(error);

  const handleLogIn = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    // console.log(email, password);

    userLogin(email, password)
      .then(res => {
        console.log(res.user);
        e.target.reset();
        navigate(location?.state || "/");
      })
      .catch(err => {
        console.error(err);
        setError("The email/password that you've entered is incorrect.");
      });
  };
  return (
    <div className='max-w-6xl m-auto space-y-10 '>
      <Navbar></Navbar>
      <div className='hero m-auto '>
        <div className='hero-content flex-col w-3/4 bg-white'>
          <div className='text-center'>
            <h1 className='text-2xl font-bold mb-5'> Login your account</h1>
          </div>
          <div className='card flex-shrink-0 w-full md:w-3/4 shadow-xl bg-base-100 mb-5'>
            <form onSubmit={handleLogIn} className='card-body '>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  name='email'
                  placeholder='email'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  name='password'
                  placeholder='password'
                  className='input input-bordered'
                  required
                />
                <label className='label'>
                  <p className='mt-3 flex font-sans text-sm font-light leading-normal text-inherit antialiased'>
                    Do not have an account?
                    <Link
                      to='/register'
                      className='ml-1 block font-sans text-sm font-bold leading-normal text-cyan-500 antialiased'
                    >
                      Register
                    </Link>
                  </p>
                </label>
              </div>
              {error && <p className='text-red-500'>{error}</p>}
              <div className='form-control mt-6'>
                <button className='btn btn-primary font-bold'>Login</button>
              </div>
              <SocialLogin></SocialLogin>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
