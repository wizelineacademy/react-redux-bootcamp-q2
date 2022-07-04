import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    background-color: var(--background);
    height: 100vh;
    justify-content: center;
`

export const CardLogin = styled.div`
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    width: 439px;
    min-height: 374px;  
    padding: 20px;
    row-gap: 18px;
`

export const LoginText = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 140%;
    color: var(--brand-primary-alt);
`

export const Error = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    color: red;
    margin-top: -12px;
`


