import styled from 'styled-components';

export const LoginContainer = styled.div`
    margin:128px auto 0 auto; 
    display:flex;
    height: 450px;
    max-width:600px;
    padding-top:20px;
    flex-direction: column;
    -moz-box-align: center;
    align-items: center;
    -moz-box-pack: center;
    justify-content: center;
    background-color: rgb(245, 245, 245);
    font-family: "Nunito Sans", sans-serif;
}

    div{
        margin:auto;
        width: 75%;
        display: flex;
        flex-direction: column;

        input {
            font-size: 1rem;
            margin-bottom: 16px;
            margin-top: 8px;
            border: 1px solid rgba(204, 204, 204, 0.8);
            line-height: 1.5;
            padding: 8px;
          }

          button{
            margin-top: 16px;
            width: 100%;
            background-color: rgb(32, 52, 73);
            color: white;
            border: 0px none;
            height: 50px;
            cursor: pointer;
            transition: all 0.3s ease 0s;
            
          }
        }
        hr{
            margin-top: 16px;
            margin-bottom: 16px;
            width: 80%;
            height: 1px;
            background-color: rgb(211, 211, 212);
            border: medium none;
        }
        button.icon{
            padding: 8px;
            display: flex;
            font-size: 16px;
            margin-bottom: 32px;
            div{
                width: 16px;
                padding:0 5px;
                img{
                    font-size: 16px;
                }
            } 
        }
    }
    

`;

