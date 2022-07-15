import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const RequiredAuth = ({ children, ...rest }) => {
  const auth = useAuth();
  const location = useLocation();
  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequiredAuth;
