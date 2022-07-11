import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-width: 280px;
  max-width: 420px;
  padding: 50px;
  background-color: rgb(210, 210, 210, 0.3);
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 10px 5px;
  margin-bottom: 15px;
  border: 1px solid rgb(210, 210, 210, 0.5);
`;

export const Button = styled.button`
  font-size: 16px;
  letter-spacing: .05rem;
  background-color: rgb(32,52,73);
  color: rgb(255, 255, 255);
  padding: 10px 5px;
  margin-bottom: 15px;
`;