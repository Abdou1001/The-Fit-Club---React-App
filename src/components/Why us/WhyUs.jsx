import React from 'react'
import "./WhyUs.css"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import tick from "../../assets/tick.png"
import nb from "../../assets/nb.png"
import adidas from "../../assets/adidas.png"
import nike from "../../assets/nike.png"

const WhyUs = () => {
  return (
    <div className='WhyUs' id='WhyUs'>
        <div className="imgs">
            <img src={image1} alt="img" />
            <img src={image2} alt="img" />
            <img src={image3} alt="img" />
            <img src={image4} alt="img" />
        </div>
        <div className="text">
            <p>SOME REASONS</p>
            <h3><span className='stroker'>WHY</span> CHOOSE US?</h3>
            <ul>
                <li><img src={tick} alt="img" /> OVER 140+ EXPERT COACHS</li>
                <li><img src={tick} alt="img" /> TRAIN SMARTER AND FASTER THAN BEFORE</li>
                <li><img src={tick} alt="img" /> 1 FREE PROGRAM FOR NEW MEMBER</li>
                <li><img src={tick} alt="img" /> RELIABLE PARTNERS</li>
            </ul>
            <span>OUR PARTNERS</span>
            <div className='brands'>
                <img src={nb} alt="img" />
                <img src={adidas} alt="img" />
                <img src={nike} alt="img" />
            </div>
        </div>
    </div>
  )
}

export default WhyUs