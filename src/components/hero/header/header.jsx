import React from 'react'
import "./header.css"
import logo from"../../../assets/logo.png"
import { Link } from 'react-scroll'
// fontawesome library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = () => {
    const transition = {type: "spring", duration: 3}
    
    function openNav (){
        document.querySelector("nav ul").classList.toggle("open")
    }
    window.onscroll = () => {
        document.querySelector("nav ul").classList.remove("open")
    }

    return (
        <div className='header'>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <nav>
                <ul>
                    <li className='active'>
                            <Link>Home</Link>
                    </li>
                    <li>
                        <Link to="programs"
                            smooth={true}
                            spy={true}>
                            Programs
                        </Link>
                    </li>
                    <li>
                        <Link to="WhyUs"
                            smooth={true}
                            spy={true}>
                            Why us
                        </Link>
                    </li>
                    <li>
                        <Link to="plans"
                            smooth={true}
                            spy={true}>
                                Plans
                        </Link>
                    </li>
                    <li>
                        <Link to="testimonials"
                            smooth={true}
                            spy={true}>
                            Testimonials
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="icon" onClick={openNav}>
                <FontAwesomeIcon icon="fa-solid fa-bars" />
            </div>
        </div>
    )
}

export default Header