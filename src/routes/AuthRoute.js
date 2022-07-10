import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const isAuthenticated = () => {
    return localStorage.getItem('user') ? true : false
};

export const AuthRoute = (props) => {
    return isAuthenticated() ?
        <Route {...props}/>
        : <Redirect to="/login" />
}