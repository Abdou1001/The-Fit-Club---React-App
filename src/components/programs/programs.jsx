import React from 'react'
import "../programs/programs.css"
import arrow from "../../assets/rightArrow.png"
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// إضافة جميع الأيقونات الصلبة للمكتبة
library.add(fas);

const Programs = () => {
    return (
        <div className='programs' id='programs'>
            {/* titles */}
            <div className="titles">
                <span className="stroker">EXPLORE OUR</span>
                <span>PROGRAMS</span>
                <span className="stroker">TO SHAPE YOU</span>
            </div>
            {/* programs categories */}
            <div className="programs-categories">
                {/* category */}
                <div className="category">
                    {/* img */}
                    <FontAwesomeIcon icon="fa-solid fa-dumbbell" />
                    <span>Strength Training</span>
                    {/* body */}
                    <span>In this program, you are trained to improve your strength through many exercises.</span>
                    {/* footer */}
                    <div className="join-now">
                        <span>Join Now</span>
                        <img src={arrow} alt="img" />
                    </div>
                    {/* footer */}
                </div>
                {/* category */}
                <div className="category">
                    {/* img */}
                    <FontAwesomeIcon icon="fa-solid fa-person-running" />
                    {/* head */}
                    <span>Cardio Training</span>
                    {/* body */}
                    <span>In this program, you are trained to do sequential moves in range of 20 until 30 minutes.</span>
                    {/* footer */}
                    <div className="join-now">
                        <span>Join Now</span>
                        <img src={arrow} alt="img" />
                    </div>
                </div>
                {/* category */}
                <div className="category">
                    {/* img */}
                    <FontAwesomeIcon icon="fa-solid fa-fire" />
                    {/* head */}
                    <span>Fat Burning</span>
                    {/* body */}
                    <span>In this program, you are trained to do sequential moves in range of 20 until 30 minutes.</span>
                    {/* footer */}
                    <div className="join-now">
                        <span>Join Now</span>
                        <img src={arrow} alt="img" />
                    </div>
                </div>
                {/* category */}
                <div className="category">
                    {/* img */}
                    <FontAwesomeIcon icon="fa-solid fa-heart-pulse" />
                    {/* head */}
                    <span>Health Fitness</span>
                    {/* head */}
                    {/* body */}
                    <span>This programs is designed for those who exercises only for their body fitness not body building.</span>
                    {/* body */}
                    {/* footer */}
                    <div className="join-now">
                        <span>Join Now</span>
                        <img src={arrow} alt="img" />
                    </div>
                    {/* footer */}
                </div>
            </div>
        </div>
    )
}

export default Programs