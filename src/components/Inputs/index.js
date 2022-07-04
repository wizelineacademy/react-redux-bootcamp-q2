import React from 'react';
import { InputWrapper, NormalText } from './styles'
import TextField from '@mui/material/TextField';

export const Input = (props) => {
    return (
        <InputWrapper>
            <NormalText style={{ marginBottom: 5 }}>{props.titulo}</NormalText>
            <TextField
                style={{ width: "100%" }}
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value}
                type={props.type}
                {...props}
            />
        </InputWrapper>
    )
}
