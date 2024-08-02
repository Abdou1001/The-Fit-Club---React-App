import React from 'react'
import "./Footer.css"
import github from "../../assets/github.png"
import instagram from "../../assets/instagram.png"
import linkedin from "../../assets/linkedin.png"
import logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <div className='footer'>
            {/* blur effect */}
            <div className="blur blur-red"></div>
            <div className="blur blur-orange"></div>
            {/* social div */}
            <div className="social">
                <a href="www.github.com" target='_blank'><img src={github} alt="img" /></a>
                <a href="www.instagram.com" target='_blank'><img src={instagram} alt="img" /></a>
                <a href="www.linkedin.com" target='_blank'><img src={linkedin} alt="img" /></a>
            </div>
            {/* logo div */}
            <div className="logo">
                <img src={logo} alt="img" />
            </div>
        </div>
    )
}

export default Footer