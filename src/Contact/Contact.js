import React, { useState } from 'react'
import './Contact.css'
import '../About/About.css'
import girl from '../images/girl.png'
import emailjs from 'emailjs-com'

function Contact() {
    const aftsub = "Thanks for Contact Me";
    const [sub, setsub] = useState("");
    const submit = (e) => {
        e.preventDefault();
        console.log(e.target);

        emailjs.sendForm('gmail', 'template_prgy42s', e.target, 'user_IHCiyGYkNZcFeQHj3kONa')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        setsub(aftsub);
    }

    

    return (
        <>
            <div className="contact_page_main_div">
                {/* <div className="about_head">
                    <h1>Contact Me</h1>
                </div> */}
                <div className="display">
                    <div className="container_gts">
                        <form onSubmit={submit}>
                            <h1>Contact Me</h1>
                            <div className="input">
                                <input type="text" required="required" name="name" />
                                <span>Your Name</span>
                            </div>
                            <div className="input">
                                <input type="text" required="required" name="email" />
                                <span>Your Email</span>
                            </div>
                            <div className="input">
                                <textarea name="msg" ></textarea>
                                <span>Your Message</span>
                            </div>
                            <div className="input sub">
                                <input type="submit" value="Submit" name="" />
                            </div>
                            <div className="after__submit">
                                <p>{sub}</p>
                            </div>
                        </form>
                        <div className="imgbox">
                            <img src={girl} alt="girl-img" />
                        </div>
                    </div>
                </div>
                <div className="end_footer">
                    <p>Copyright © 2021 Mohd Rehan Qureshi, All Rights Reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Contact
