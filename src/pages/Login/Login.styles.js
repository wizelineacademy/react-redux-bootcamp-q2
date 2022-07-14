import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 25rem;
  width: 600px;
  margin: auto;
  margin-top: 5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border-radius: 5%;
  box-shadow: 2px 2px 25px -7px #4c4c4c;
`;

export const InputWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  font-size: 1rem;
  margin-bottom: 16px;
  margin-top: 8px;
  border: 1px solid #cccc;
  line-height: 1.5;
  padding: 8px;
`;

export const LoginButton = styled.button`
  width: auto;
  margin: auto;
  margin-top: 1rem;
  text-align: center;
  padding: 1.2em 3.1em;
  border: none;
  border-radius: 7px;
  font-size: 0.9em;
  font-weight: 700;
  letter-spacing: 1.3px;
  color: #fff;
  background-color: #3483fa;
  box-shadow: 2px 2px 25px -7px #4c4c4c;
  cursor: pointer;
`