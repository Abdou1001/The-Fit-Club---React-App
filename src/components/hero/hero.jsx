import React, { useEffect, useRef, useState } from 'react'
import "./hero.css"
import Header from './header/header'
// imgs
import hero_image_back from "../../assets/hero_image_back.png"
import hero_image from "../../assets/hero_image.e19ac0c6b1009c7280f5.png"
import heart from "../../assets/heart.png"
import calories from "../../assets/calories.png"
// motion librairy
import { motion } from "framer-motion"

const transition = {type: "spring", duration: 3}
const Hero = () => {
    const [coaches, setCoaches] = useState(0)
    const coachesRef = useRef(0)
    const [joined, setJoined] = useState(600)
    const joinedRef = useRef(600)
    const [fitness, setFitness] = useState(0)
    const fitnessRef = useRef(0)
    
    window.onload = () => {
        // coaches
        const counter = setInterval(() => {
            if(coachesRef.current < 140){
                setCoaches(c => c + 1)
                coachesRef.current += 1
            }else{
                clearInterval(counter)
            }
        }, 1000 / 140);

        // joined
        const counter2 = setInterval(() => {
            if(joinedRef.current < 978){
                setJoined(j => j + 1)
                joinedRef.current += 1
            }else{
                clearInterval(counter2)
            }
        }, 1000 / 700);
        // fitness
        const counter3 = setInterval(() => {
            if(fitnessRef.current < 50){
                setFitness(f => f + 1)
                fitnessRef.current += 1
            }else{
                clearInterval(counter3)
            }
        }, 1000 / 50);
    }

    return (
        <div className='hero'>
            {/* blur effect */}
            <div className="blur hero-blur"></div>
            {/* left side */}
            <div className="left_h">
                {/* the header compondent */}
                <Header />
                {/* the text THE BEST section */}
                <div className="the_best_ad">
                    <motion.div 
                    initial = {{x: 238}}
                    whileInView={{ x: 0 }}
                    transition= {{...transition, type: "tween"}}
                    >
                    </motion.div>
                    <span>THE BEST FITNESS CLUB IN THE TOWN</span>
                </div>
                {/* hero text section */}
                <div className="hero_text">
                    <div>
                        <span className='stroker'>SHAPE</span>
                        <span>YOUR</span>
                    </div>
                    <div>
                        <span>IDEAL BODY</span>
                    </div>
                    <div>
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>
                </div>
                {/* figures section */}
                <div className="figures">
                    <div>
                        <span>+ {coaches}</span>
                        <span>EXPERT COACHES</span>
                    </div>
                    <div>
                        <span>+ {joined}</span>
                        <span>MEMBERS JOINED</span>
                    </div>
                    <div>
                        <span>+ {fitness}</span>
                        <span>FITNESS PROGRAMS</span>
                    </div>
                </div>
                {/* hero buttons */}
                <div className="hero_buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            {/* right side */}
            <div className="right_h">
                {/* button  Join Now */}
                <div className="join">
                    <button className='btn'><a href="#">Join Now</a></button>
                </div>
                {/* heard rate */}
                <motion.div className="heart-rate"
                    initial = {{x: 70}}
                    whileInView={{ x: 0 }}
                    transition= {{...transition}}
                >
                    <div className="img">
                        <img src={heart} alt="img" />
                    </div>
                    <div className="text">
                        <span>Heart Rate</span>
                        <span>116 bpm</span>
                    </div>
                </motion.div>
                {/* hero imgs */}
                <div className="hero-imgs">
                    <img src={hero_image} alt="img" className='hero-image'/>
                    <motion.img src={hero_image_back} alt="img" className='hero-image-back'
                    initial = {{x: 100}}
                    whileInView={{ x: 0 }}
                    transition= {{...transition}}
                    />
                </div>
                {/* Calories  */}
                <motion.div className="calories"
                    initial = {{x: -130}}
                    whileInView={{ x: 0 }}
                    transition= {{...transition}}
                >
                    <img src={calories} alt="img" />
                    <div className="text">
                        <span>Calories burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero