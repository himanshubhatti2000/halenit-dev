import React from 'react'
import a from './1.jpg'
import b from './2.jpg'
import c from './3.jpg'
import d from './4.jpg'
function Slider(){
    return(
        <div className="test">
            <div className="slider">
                <div className="slides">
                    <input type="radio" id="radio1" name="radio-btn" />
                    <input type="radio" id="radio2" name="radio-btn" />
                    <input type="radio" id="radio3" name="radio-btn" />
                    <input type="radio" id="radio4" name="radio-btn" />
                    <div className="first slide">
                        <img src={a} alt="img" />
                    </div>
                    <div className="slide">
                        <img src={b} alt="img" />
                    </div>
                    <div className="slide">
                        <img src={c} alt="img" />
                    </div>
                    <div className="slide">
                        <img src={d} alt="img" />
                    </div>
                    <div className="nav-auto">
                        <div className="auto-btn1"></div>
                        <div className="auto-btn2"></div>
                        <div className="auto-btn3"></div>
                        <div className="auto-btn4"></div>
                    </div>

                </div>
                <div className="nav-manual">
                    <label htmlFor="radio1" className="manual-btn"></label>
                    <label htmlFor="radio2" className="manual-btn"></label>
                    <label htmlFor="radio3" className="manual-btn"></label>
                    <label htmlFor="radio4" className="manual-btn"></label>
                </div>
            </div>
        </div>
    )
}
export default Slider