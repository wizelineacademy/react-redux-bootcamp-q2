import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthProvider';

export const Logout = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    auth.logout(() => {
      navigate('/');
    });
    // eslint-disable-next-line
  }, []);
  return null;
};
