import React, { Component , Fragment, useRef, useEffect } from "react";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import PortfolioMasonry from "../elements/portfolio/PortfolioMasonry";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";
import Helmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import ProgressOne from "../blocks/progressbar/ProgressOne";
import ServiceTwo from "../elements/service/ServiceTwo";
import About from "../elements/About"
import Contact from "../elements/Contact"

const HomePortfolio = () => {
        const SlideList = [
            {
                textPosition: 'text-center',
                category: '',
                title: 'Web Developer',
                description: 'I have a passion for programming.',
                buttonText: 'Contact Me',
                buttonLink: '/contact'
            }
        ]
        
        const portfolioRef = useRef(null)
        const skillsRef = useRef(null)
        const aboutRef = useRef(null)
        const contactRef = useRef(null)
        
        const portfolioScroll = () => {
            console.log("Running portfolioScroll")
            portfolioRef.current.scrollIntoView({ behavior: 'smooth' });
        }

        const skillsScroll = () => {
            skillsRef.current.scrollIntoView({ behavior: 'smooth' })
        }

        const aboutScroll = () => {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' })
        }

        const contactScroll = () => {
            contactRef.current.scrollIntoView({ behavior: 'smooth' })
        }

        return(
            <div className="active-dark"> 
                <Helmet pageTitle="Home Portfolio" />

                {/* Start Header Area  */}
                <Header portfolioScroll={portfolioScroll} skillsScroll={skillsScroll} aboutScroll={aboutScroll} contactScroll={contactScroll} />
                {/* End Header Area  */}
                {/* Start Slider Area   */}
                {/* <div className="slider-wrapper"> */}
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <div className="slide slide-style-2 fullscreen d-flex align-items-center justify-content-center bg_image--25" key={index} data-black-overlay="6">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className='inner text-center'>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            {value.title ? <h1 className="title theme-gradient">{value.title}</h1> : ''}
                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                            {value.buttonText ? <div className="slide-btn"><a className="btn-default btn-border btn-opacity" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}                                       
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                {/* </div> */}
                {/* End Slider Area   */}

                {/* Start portfolio Area  */}
                {/* <div className="rn-portfolio-area bg_color--10 ptb--120 horizontal-spacing"> */}
                <div className="rn-portfolio-area ptb--120 horizontal-spacing" ref={portfolioRef}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    {/* <span className="subtitle">My complete project</span> */}
                                    <h2 className="title">Projects</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper plr--30">
                        <div className="row projects-list">
                            <PortfolioMasonry item="8" column="portfolio-tilthover" />
                        </div>
                    </div>
                </div> 
                {/* End portfolio Area  */}

                <div className="service-area pb--30 bg_color--10" ref={skillsRef}>
                   <div className="container">
                        <ServiceTwo />
                   </div>
                </div>    
                <div className="about-area plr--60 pb--60 bg_color--1" ref={aboutRef}>
                    <About />
                </div>
                <div className="contact-form--1" ref={contactRef}>
                    <Contact />
                </div>



                {/* Start Footer Area  */}
                {/* <FooterTwo /> */}
                {/* End Footer Area  */}
                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
            </div>
        )
    // }
}
export default HomePortfolio;