import React from 'react'
import '../About/About.css'
import '../Portfolio/Portfolio.css'
import PortCard from './PortCard'
import web from '../images/web.jpeg'
import web_two from '../images/web_two.jpeg'
import web_ui from '../images/web_ui.jpeg'


function Portfolio() {

    return (
        <>
            <section className="portfolio_main_wrapper main_about_wrap">
                <div className="portfolio_main_div">
                    <div className="about_head port">
                        <h1>Portfolio</h1>
                    </div>
                    <br></br>
                <div className="card_main_div">
                    <div className="container gts_cstm_container">
                        <div className="row">
                            <div className="col-md-4">
                                <PortCard 
                                    image={web}
                                    image_title="HTML & CSS Website"
                                    head="HTML, CSS & JS Website"
                                    head_text="HTML the language that gives web content structure and meaning.CSS the language used to style web pages.JavaScript the scripting language used to create dynamic functionality on the web"
                                />
                            </div>
                            <div className="col-md-4">
                            <PortCard 
                                    image={web_two}
                                    image_title="React Website"
                                    head="React Website"
                                    head_text="React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components"
                                />
                            </div>
                            <div className="col-md-4">
                            <PortCard 
                                    image={web_ui}
                                    image_title="UI UX Design"
                                    head="UI UX Design"
                                    head_text="A UI/UX designer's job is to create user-friendly interfaces that enable users to understand how to use complex technical products. If you're passionate about the latest technology trends and devices, you'll find great fulfillment in being involved in the design process for the next hot gadget"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio
