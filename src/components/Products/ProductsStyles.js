import styled from 'styled-components';

export const FlexContainer = styled.ul`
    padding: 0;
    margin: auto;
    list-style: none;
    -ms-box-orient: horizontal;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    width: 70%;
`;

export const Item = styled.li`
    padding: 5px;
    width: 300px;
    margin: 10px;
    font-weight: bold;
    text-align: center;
    min-height: 310px;
    align-self: flex-end;
`
