import React from 'react'
import "./Plans.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import whiteTick from  "../../assets/whiteTick.png"
import rightArrow from  "../../assets/rightArrow.png"

const Plans = () => {
  return (
    <div className='plans' id='plans'>
        {/* blurs */}
        <div className="blur blur-plan-1"></div>
        <div className="blur blur-plan-2"></div>
        {/* tiltes */}
        <div className="titles">
            <span className="stroker">READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className="stroker">NOW WITHUS</span>
        </div>
        {/* the plans section */}
        <div className="plans-section">
            {/* plan */}
            <div className="plan">
                {/* icon */}
                <FontAwesomeIcon icon="fa-solid fa-heart-circle-bolt" />
                 {/* title plan */}
                <h5>BASIC PLAN</h5>
                {/* price */}
                <span className="price">$ 25</span>
                {/* features */}
                <ul>
                    <li><img src={whiteTick} alt="img" />2 hours of excercises</li>
                    <li><img src={whiteTick} alt="img" />Free consultaion to coaches</li>
                    <li><img src={whiteTick} alt="img" />Access to The Community</li>
                </ul>
                {/* footer the plan */}
                <span className="more">See more benefits <img src={rightArrow} alt="img" /></span>
                <button className='btn'>Join now</button>
            </div>
            {/* plan */}
            <div className="plan active">
                {/* icon */}
                <FontAwesomeIcon icon="fa-solid fa-crown" />
                {/* title plan */}
                <h5>PREMIUM PLAN</h5>
                {/* price */}
                <span className="price">$ 30</span>
                {/* features */}
                <ul>
                    <li><img src={whiteTick} alt="img" />5 hour of excercises</li>
                    <li><img src={whiteTick} alt="img" />Free consultaion of Coaches</li>
                    <li><img src={whiteTick} alt="img" />Accessto minibar</li>
                </ul>
                {/* footer the plan */}
                <span className="more">See more benefits <img src={rightArrow} alt="img" /></span>
                <button className='btn'>Join now</button>
            </div>
            {/* plan */}
            <div className="plan">
                {/* icon */}
                <FontAwesomeIcon icon="fa-solid fa-dumbbell" />
                {/* title plan */}
                <h5>PRO PLAN</h5>
                {/* price */}
                <span className="price">$ 45</span>
                {/* features */}
                <ul>
                    <li><img src={whiteTick} alt="img" />8 hours of excercises</li>
                    <li><img src={whiteTick} alt="img" />Consultation of Private Coach</li>
                    <li><img src={whiteTick} alt="img" />Free Fitness Merchandises</li>
                </ul>
                {/* footer the plan */}
                <span className="more">See more benefits <img src={rightArrow} alt="img" /></span>
                <button className='btn'>Join now</button>
            </div>
        </div>
    </div>
  )
}

export default Plans