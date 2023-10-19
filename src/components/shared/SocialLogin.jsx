import { AiFillGoogleCircle } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuth";

const SocialLogin = () => {
  const { googleLogin } = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();
  const handleSocialLogin = () => {
    googleLogin()
      .then(res => {
        console.log(res.user);
        navigate(location?.state || "/");
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className=' mt-5'>
        <Link state={location.pathname}>
          <button
            onClick={handleSocialLogin}
            className='btn btn-outline font-bold text-xl btn-primary'
          >
            <AiFillGoogleCircle className='text-4xl mr-2'></AiFillGoogleCircle>
            Google
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SocialLogin;
