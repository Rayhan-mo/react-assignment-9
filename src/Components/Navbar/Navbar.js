
import React from 'react';
import './Navbar.css';
import background from '../Image/coxbazar.png';
import Logo from '../Icon/Logo.png';


const Navbar = () => {
    const bgStyle={
        backgroundImage:`url(${background})`,
        height:'70px'
    }
    return (
        <div className="Navbar" style={bgStyle} >
            <nav>
                <div className="logo">
                    <img src={Logo} alt=""/>
                </div>
                <div className="search">
                    <form action="">
                        <input type="text" placeholder="Search your Destination..."/>
                    </form>
                </div>
            
                <a href="login" style={{color:'white', backgroundColor:'green'}}>Login</a>
                <a href="contact">Contact</a>
                <a href="blog">Blog</a>
                <a href="/news">News</a>   
                <a href="/destination">Destination</a>
            </nav>
        </div>
    );
};

export default Navbar;