import React, {useState} from 'react'
import "./Testimonials.css"
// font AwesomeIcon librairy
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { testimonialsData } from"../../data/testimonialsData"
// motion librairy
import { motion } from "framer-motion"

const transition = {type: "spring", duration: 3}

const Testimonials = () => {
    const [selected, setSeleced] = useState(0)
    const testiLength = testimonialsData.length

    return (
        <div className='testimonials' id='testimonials'>
            {/* left side */}
            <div className="left">
                {/* text testimonials */}
                <span>TESTIMONIALS</span>
                <span className='stroker'>WHAT THEY</span>
                <span>SAY ABOUT US</span>
                <motion.div className="info"
                    key={selected}
                    initial = {{x : -100, opacity:0}}
                    animate = {{x : 0, opacity:1}}
                    exit =  {{x : -100, opacity:0}}
                    transition = {{...transition, duration: 1}}
                >
                    {/* review */}
                    <p key={selected}>
                        {testimonialsData[selected].review}
                    </p>
                    {/* name coatch */}
                    <span>{testimonialsData[selected].name}</span>
                    <span> - {testimonialsData[selected].status}</span>
                </motion.div>
            </div>
            {/* right side */}
            <div className="right">
                {/* imgs */}
                <motion.div className="border-img"
                    initial = {{x : -100, opacity:0}}
                    whileInView = {{x : 0, opacity:1}}
                    transition = {{...transition, duration: 2}}
                >
                </motion.div>
                <motion.div className="back-img"
                    initial = {{x :  100, opacity:0}}
                    whileInView = {{x : 0, opacity:1}}
                    transition = {{...transition, duration: 2}}
                >
                </motion.div>
                {/* img the coaches */}
                <motion.img src={testimonialsData[selected].image} alt="img" 
                    key={selected}
                    initial = {{x : 100, opacity:0}}
                    animate = {{x : 0, opacity:1}}
                    exit= {{x : -100, opacity:0}}
                    transition = {{...transition, duration: 1}}
                />
            </div>
            {/* left arrow and right arrow */}
            <div className="controls">
                <FontAwesomeIcon icon="fa-solid fa-caret-left" onClick={() =>{
                    (selected > 0)
                    ? setSeleced(s => s - 1)
                    : setSeleced(s => testiLength - 1)
                }}/>
                <FontAwesomeIcon icon="fa-solid fa-caret-right" onClick={() =>{
                    (selected < testiLength - 1)
                    ? setSeleced(s => s + 1)
                    : setSeleced(s => 0)
                }}/>
            </div>
        </div>
    )
}

export default Testimonials