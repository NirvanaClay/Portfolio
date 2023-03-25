import React, { Component } from "react";
import { FiSend } from "react-icons/fi";

import { Link } from 'react-router-dom';
class About extends Component{
    render(){
        let title = 'About Me',
        description = "I have a genuine love for solving problems through programming. It's amazing what is possible using nothing other than logic and syntax. My aim is to become the best coder that I can be. Let me be of assistance to you as I grow into my full potential as a developer!"
        // description2 = 'Galaxies enflame and dissolve in the blink of one eye.';

        return(
            <React.Fragment>
                <div className="about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            {/* <div className="col-lg-5 col-md-12">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/about-1.png" alt="About Images"/>
                                </div>
                            </div> */}
                            <div className="col-lg-7 col-md-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        {/* <div className="icon">
                                            <FiSend />
                                        </div> */}
                                        <h2 className="title">{title}</h2>
                                        <p className="description">{description}</p>
                                        {/* <p className="description">{description2}</p> */}
                                    </div>                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default About;