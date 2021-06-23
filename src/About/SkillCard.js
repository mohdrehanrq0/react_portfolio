import React from 'react'
import '../About/About.css'

function SkillCard(props) {
    
    const stroke = `calc(440 - (440 *    ${props.percent}) / 100)`;

    return (
        <>
            <div className="card">
                <div className="box">
                    <div className="percent">
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70" style={{strokeDashoffset: stroke , stroke: "#fc5185"}}></circle>
                        </svg>
                        <div className="number">
                            <h2>{props.percent}<span>%</span></h2>
                        </div>
                    </div>
                    <h2 className="text">{props.title}</h2>
                </div>
            </div>
        </>
    )
}

export default SkillCard
