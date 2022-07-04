import styled from 'styled-components';

export const MainButtonWrapper = styled.div`
    width: 100%;
    height: 40px;
    background: var(--primary);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition-duration: .3s;

    &:hover{
        transition-duration: .3s;
        transform: scale(1.05) ;
    }
`

export const Text = styled.a`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 140%;
    /* identical to box height, or 17px */
    text-align: center;

    /* Linear/White */
    color: #FFFFFF;
`
