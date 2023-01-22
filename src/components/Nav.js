import React, { Component } from 'react';
import '../style.css';



class Navbar extends Component{
    render(){
        return(
          
            <nav className='NBar'>

                <a href='/'><img className='Image'  src={require('../assets/HardwareLogo.png')} alt="react logo" /></a>
                <ul className='UL'>
                    <li><a href='/'>Home</a></li>
                    <li > <a href='login'>Log In</a> </li>
                    <li> <a href ='signup'>Sign Up</a></li>
                  
                </ul>
            </nav>



        )

  

        
    }
}

export default Navbar;