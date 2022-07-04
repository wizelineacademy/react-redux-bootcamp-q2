import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    background-color: var(--background);
    height: 100vh;
    padding: 30px;
`

export const FilterText = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;
`

export const CategoriesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
export const CheckContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items:center;

    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        /* identical to box height */

        display: flex;
        align-items: center;
        text-align: center;
    }
`