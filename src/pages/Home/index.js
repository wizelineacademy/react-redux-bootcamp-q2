import React from 'react';
import { Link } from 'react-router-dom';
import { Main } from './styles'

export const Home = () => {
    return (
        <Main>
            <h1>Welcome to WizeStore!</h1>
            <p>
                Browse our <Link to='/products'>products</Link>
            </p>
        </Main>
    );
};
