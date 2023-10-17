import { AiFillGoogleCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const SocialLogin = () => {
  const handleSocialLogin = () => {};

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
