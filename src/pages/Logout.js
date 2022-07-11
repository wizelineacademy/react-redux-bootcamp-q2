import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../components/AuthProvider';

export const Logout = () => {
  const auth = useAuth();
  const history = useHistory();
  useEffect(() => {
    auth.logout(() => {
      history.push('/');
    });
    // eslint-disable-next-line
  }, []);
  return null;
};
