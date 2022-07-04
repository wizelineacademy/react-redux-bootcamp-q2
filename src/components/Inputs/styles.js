import styled from 'styled-components';

export const InputWrapper = styled.div`
   background: 'white';
   width: 100%;
   overflow: hidden;

   .textInput{
       border: 0px;
       border-bottom: 1px solid lightgray;
       padding: 10px 5px;
       width: 100%;
       height: 40px;
   }
   
`

export const NormalText = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    color: var(--linear-gray);
`