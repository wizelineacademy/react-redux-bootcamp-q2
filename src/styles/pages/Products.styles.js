import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    margin: 20px 200px;
`;

export const Product = styled.div`
    width: 200px;
    padding: 10px 5px;
    text-align: center;

    img {
        height: 140px;
    }
`;

export const Title = styled.h3`
    font-size: 18px;
    font-weight: 600;
    text-align: left;
`;

export const Category = styled.div`
    margin-top: -12px;
    text-align: left;
`;

export const Price = styled.div`
    text-align: right;
    font-weight: 600;
    padding: 5px 0px;
`;

export const Button = styled.button`
    color: white;
    background-color: rgb(32, 52, 73);
    width: 100%;
    margin: 10px 0px;
    padding: 15px;
    border: none;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
`;