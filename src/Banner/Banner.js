import React from 'react'
import Typed from 'react-typed'
import '../Banner/Banner.css'
import Button from '@material-ui/core/Button';

function Banner() {
    
    return (
        <>
            <div className="main_wrapper">
                <div className="text_wrapper_main">
                    <h1>Hey! Myself Rehan.<br />
                        I am a <Typed
                            className="text-type"
                            strings={["Web Designer","Freelancer","Entrepreneur","Bug Hunter"]}
                            typeSpeed={60}
                            backSpeed={80}
                            loop
                         />
                    </h1>
                    <Button className="contact_head_btn" variant="outlined" href="#sec-four">Contact Me</Button>

                </div>
                <div className="slide-in wow bounceInUp current" >
                <a className="pointer" href="#sec-two"> </a>
                </div>
            </div>
        </>
    )
}

export default Banner
