import React, { useRef } from 'react'
import '../About/About.css'
import SkillCard from './SkillCard'
import Carousel from 'react-elastic-carousel';




function About() {

            const carouselRef = useRef(null);

            const onNextStart = (currentItem, nextItem) => {
            if (currentItem.index === nextItem.index) {
                // we hit the last item, go to first item
                carouselRef.current.goTo(0);
            }
            };
            const onPrevStart = (currentItem, nextItem) => {
            if (currentItem.index === nextItem.index) {
                // we hit the first item, go to last item
                carouselRef.current.goTo(SkillCard.length);
            }
            };
            


    return (
        <>
            <section className="main_about_wrap">
                <div className="about_head">
                    <h1>About Me</h1>
                </div>
                <div className="container about_gts_container" style={{position:"relative",top: "20%", transform: "translateY(-20%)"}}>
                    <div className="row">
                        <div className="col-md-6 about_gts_col_6">
                            <div className="name_head">
                                <h2>Mohd Rehan Qureshi</h2>
                            </div>
                            <div className="name_sub_head">
                                <h5>I Design and Build a Digital Product</h5>
                            </div>
                            <div className="name_para_head">
                                <p>Nice to meet you,<br />
                                Since beginning my journey as a freelance designer nearly 2 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                          <div className="skillbar_section">
                            <h3>Skills</h3>
                            <Carousel
                                enableAutoPlay
                                autoPlaySpeed={2500}
                                className='carousel-university'
                                ref={carouselRef}
                                onPrevStart={onPrevStart}
                                onNextStart={onNextStart}
                                disableArrowsOnEnd={false}
                            >
                                <SkillCard
                                    percent={90}
                                    title={"HTML"}
                                 />
                                <SkillCard 
                                    percent={85}
                                    title={"CSS"}
                                />
                                <SkillCard 
                                    percent={70}
                                    title={"javascript"}
                                />
                                <SkillCard 
                                    percent={50}
                                    title={"react"}
                                />
                                <SkillCard 
                                    percent={90}
                                    title={"bootstrap"}
                                />
                                <SkillCard 
                                    percent={80}
                                    title={"jquery"}
                                />
                            </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
