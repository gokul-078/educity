import React, { useRef } from 'react'
import './Testimonials.css'

import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'

import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'




const Testimonials = () => {

    const sliders = useRef();

    let tx = 0;

    const slideForward = () => {
        if(tx > -50){
            tx -= 25;
        }
        sliders.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = () => {
        if(tx < 0){
            tx += 25;
        }
        sliders.current.style.transform = `translateX(${tx}%)`
    }


  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={sliders}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>University, USA</span>
                            </div>
                        </div>
                        <p>Overall, my experience has been positive, but like any institution, there are both strengths and areas for improvement. The professors are knowledgeable and approachable.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Chris Wokes</h3>
                                <span>University, USA</span>
                            </div>
                        </div>
                        <p>Overall, my experience has been positive, but like any institution, there are both strengths and areas for improvement. The professors are knowledgeable and approachable.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Sydney Sweeny</h3>
                                <span>University, USA</span>
                            </div>
                        </div>
                        <p>Overall, my experience has been positive, but like any institution, there are both strengths and areas for improvement. The professors are knowledgeable and approachable.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Robert Downey JR</h3>
                                <span>University, USA</span>
                            </div>
                        </div>
                        <p>Overall, my experience has been positive, but like any institution, there are both strengths and areas for improvement. The professors are knowledgeable and approachable.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials