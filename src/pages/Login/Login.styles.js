import styled from 'styled-components';

export const Wrapper = styled.div`

  .conatiner-avatar {
    display: flex;
    flex-direction:column;
    text-align:center;
    align-items: center;
    justify-content:center;
  }
  .avatar {
    background-color: #764AF1;
    text-align:center;
  };

  .error-text{
    color:#d32f2f;;
    font-weight: 600;
    font-size: 14px;
  }

  @media only screen and (max-width: 600px) {
    margin-top: 100px;
  }
  
`;
