import React, { Component } from 'react';
import '../login.css';
import styled from 'styled-components';
 import Input from './Input';
import Button from './Button';

class Register extends Component{
  
    render(){
      
        return(
            <div className='login_body'>

                <MainContainer>
                    <WelcomeText>Join Us</WelcomeText>
                    <InputContainer>
                        <Input type="text" placeholder="first name" />
                        <Input className="Register_input" type="text" placeholder="lastname" />
                        <Input className="Register_input" type="text" placeholder="Email" />
                        <Input className="Register_input" type="password" placeholder="Password" />
                    </InputContainer>
                    <ButtonContainer>
                      <Button content={"sign up"}></Button>
                    </ButtonContainer>
                </MainContainer>
            </div>
        )
    }
}
const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
  font-weight: bold;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 45%;
  width: 95%;
  

  
  
`;
const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;





export default Register;