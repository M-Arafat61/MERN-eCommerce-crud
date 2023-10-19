import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../hooks/useAuth";
import PropTypes from "prop-types";

const PrivateCart = ({ children }) => {
  const { user, loading } = useAuthContext();
  const location = useLocation();
  if (loading) {
    return <h1 className='text-3xl text-center'>Loading...</h1>;
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to='/login' />;
};
PrivateCart.propTypes = {
  children: PropTypes.object,
};
export default PrivateCart;
