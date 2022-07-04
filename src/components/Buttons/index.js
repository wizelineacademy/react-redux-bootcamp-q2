import React from 'react';
import { MainButtonWrapper, Text } from './styles';

export const MainButton = ({ onClick, children, style, textStyle }) => {
    return (
        <MainButtonWrapper style={style} onClick={onClick}>
            <Text style={textStyle}>{children}</Text>
        </MainButtonWrapper>
    )
}
