import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    background-color: var(--background);
    padding: 40px ;
`

export const DescriptionLabel = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #818181;
`


export const ImageContainer = styled.div`
   width: 25%;
   height: 80px;
   cursor: pointer;
   transition-duration: .3s;

   &:hover{
    transition-duration: .3s;
    transform: scale(1.2) ;
   }
`


