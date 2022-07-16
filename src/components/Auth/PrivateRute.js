import React from "react";
import { Redirect } from "react-router-dom";
import { selectMyCurrentUser } from '../../Redux/slices/usersLogin';
import { useSelector } from 'react-redux';


export const PrivateRoute = ({ children}) => {
  const isAuthenticated = useSelector(selectMyCurrentUser);
      
  if (isAuthenticated ) {
    return children
  }

  return <Redirect to="/login" />
    
}

export default PrivateRoute;


