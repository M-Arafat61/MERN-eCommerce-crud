import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
import SocialLogin from "../../components/shared/SocialLogin";
import useAuthContext from "../../hooks/useAuth";

const Login = () => {
  const { userLogin } = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogIn = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    userLogin(email, password)
      .then(res => {
        console.log(res.user);
        e.target.reset();
        navigate(location?.state || "/");
      })
      .catch(err => {
        return toast.error(`${err.message}`, {
          style: {
            color: "white",
            fontSize: "20px",
            backgroundColor: "red",
          },
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
      });
  };
  return (
    <div className='max-w-6xl m-auto'>
      <Navbar></Navbar>
      <div className='hero max-w-3xl h-[70vh] m-auto space-y-5 '>
        <div className='hero-content flex-col'>
          <div className='text-center'>
            <h1 className='text-5xl font-bold mb-5'> Login your account</h1>
          </div>
          <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <form onSubmit={handleLogIn} className='card-body'>
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
                      className='ml-1 block font-sans text-sm font-bold leading-normal text-pink-500 antialiased'
                    >
                      Register
                    </Link>
                  </p>
                </label>
              </div>
              <div className='form-control mt-6'>
                <button className='btn btn-primary'>Login</button>
              </div>
              <SocialLogin></SocialLogin>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
