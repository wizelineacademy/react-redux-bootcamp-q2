import React from "react";
import { Redirect } from "react-router-dom";


export const PrivateRoute = ({ children}) => {
  const isAuthenticated = localStorage.getItem('username');
      
  if (isAuthenticated ) {
    return children
  }

  return <Redirect to="/login" />
    
}

export default PrivateRoute;


