import { Redirect, Route } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const RequiredAuthRoute = ({ children, ...rest }) => {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
};

export default RequiredAuthRoute;
