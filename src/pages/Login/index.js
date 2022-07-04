import React, { useState } from 'react';
import { Input } from '../../components/Inputs';
import { Container, CardLogin, LoginText, Error } from './styles';
import { MainButton } from '../../components/Buttons';
import { CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handlerChange = (value, name) => {

    }

    const handleSubmit = () => {
        navigate('/products');
    }

    return (
        <Container>
            <CardLogin>
                <LoginText>Inicia Sesión</LoginText>
                <Input
                    titulo="Correo"
                    placeholder="correo@gmail.com"
                    onChange={(value) => { handlerChange(value, "email") }}
                    type="email"
                />
                <Error></Error>
                <Input
                    titulo="Contraseña"
                    type="password"
                    placeholder="**************"
                    onChange={(value) => { handlerChange(value, "password") }}
                />
                {
                    isLoading ?
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <CircularProgress />
                        </div> : <MainButton onClick={handleSubmit}>INICIAR SESION</MainButton>
                }

            </CardLogin>
        </Container>
    )
}