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
        console.log(res);
        navigate(location?.state || "/");
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className='flex items-center mt-5'>
        <AiFillGoogleCircle className='text-5xl'></AiFillGoogleCircle>
        <Link state={location.pathname}>
          <button
            onClick={handleSocialLogin}
            className='btn btn-outline btn-primary'
          >
            Google
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SocialLogin;
