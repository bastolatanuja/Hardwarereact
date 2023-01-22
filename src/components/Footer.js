import React, { Component } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

class Footer extends Component{
    render(){
        return(
            
                <footer className='Foot'>
                    <div className='footer_ul'>
                        <ul>
                            <li><p>Contact no : 9825923276</p></li>
                            <li><p>email : <a className='link_text' href='mailto:tanujabastola@gmail.com'>tanujabastola@gmail.com</a></p></li>
                            <li><p>Address : Dillibajar, Kathmandu</p></li>
                        </ul>
                    </div>
                    <div className='footer-icons'>
                        <div className='footer-icons-item'>
                            <FaFacebookF/>
                            <FaInstagram/>
                            <FaTwitter/>
                        </div>
                        <div className='footer-icons-heading'>Follow our Socials</div>
                    </div>
                    <a href='/'><img className='footer-logo'  src={require('../assets/HardwareLogo.png')} alt="react logo" /></a>
                
                </footer>
          
        )

        
    }
}

export default Footer;