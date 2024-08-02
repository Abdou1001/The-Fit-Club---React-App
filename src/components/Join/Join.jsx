import React from 'react'
import "./Join.css"

const Join = () => {
  return (
    <div className='join' id='join'>
      {/* left side */}
        <div className="left">
            <h4><span className='stroker'>READY TO</span> LEVEL UP YOUR BODY <span className='stroker'>WITH US?</span></h4>
        </div>
      {/* right side */}
        <div className="right">
            <form>
                <input type="email" name="email" id="email" placeholder='Enter Your Email Address'/>
                <input type="submit" value="Join now" className='btn'/>
            </form>
        </div>
    </div>
  )
}

export default Join