import React, { Component } from 'react';
import '../login.css';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"; 
import Input from './Input';
import Button from './Button';
import Icons from './Icons';

class LogIn extends Component{
  
    render(){
      const FacebookBackground =
      "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
    const InstagramBackground =
      "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
    const TwitterBackground =
      "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
        return(
            <div className='login_body'>
              <form className='login_form'>
                <div className='main_container'>
                    <h2 className='welcome_text'>Welcome</h2>
                    <div className='input_container'>
                        <input className='input_input' type="text" placeholder="Email" />
                        <input className='input_input' type="password" placeholder="Password" />
                    </div>
                    <div className='buttton_container'>
                      <button type="submit" className='button_button' > Sign In</button>
                    </div>
                    <h5 className='login_with'>or Login With</h5>
                    <hr className='horizontal_rule'/>
                    <div className='icons_container'>
                      <Icons color={FacebookBackground}>
                        <FaFacebookF/>
                      </Icons>
                      <Icons color={InstagramBackground}>
                        <FaInstagram/>
                      </Icons>
                      <Icons color={TwitterBackground}>
                        <FaTwitter/>
                      </Icons>
                    </div>
                    <h5 className='forgot_password'>Forgot Password?</h5>
                </div>
              </form>
            </div>
        )
    }
}

export default LogIn;