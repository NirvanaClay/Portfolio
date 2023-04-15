import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiHeadphones , FiMail , FiMapPin, FiPhone } from "react-icons/fi";
import GoogleMapReact from 'google-map-react';
import ContactTwo from "../elements/contact/ContactTwo";
import BrandTwo from "../elements/BrandTwo";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

const AnyReactComponent = ({ text }) => <div>{text}</div>;


class Contact extends Component{
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Contact' />

                {/* <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" /> */}

                 {/* Start Breadcrump Area */}
                 {/* <div className="rn-page-title-area bg_image bg_image--15"  data-black-overlay="6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--20">
                                    <h2 className="contact-title theme-gradient text-center">Contact Me</h2> */}
                                    {/* <p>Contrary to popular belief, Lorem Ipsum is not simply random text. </p> */}
                                {/* </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* End Breadcrump Area */}


                {/* Start Contact Top Area  */}
                <div className="rn-contact-top-area pb--30 bg_color--5">
                    <div className="container">
                        <div className="contact-container">
                            {/* Start Single Address  */}
                            <div className="rn-address">
                                <div className="icon">
                                    <FiPhone />
                                </div>
                                <div className="inner">
                                    <h4 className="title">Phone Number</h4>
                                    <p><a href="tel:+444 555 666 777">941-246-8140</a></p>
                                </div>
                            </div>
                            {/* End Single Address  */}

                            {/* Start Single Address  */}
                            <div className="rn-address">
                                <div className="icon">
                                    <FiMail />
                                </div>
                                <div className="inner">
                                    <h4 className="title">Email Address</h4>
                                    <p><a href="mailto:admin@gmail.com">NirvanaClay@gmail.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Contact Top Area  */}

                {/* Start Contact Page Area  */}
                {/* <div className="rn-contact-page ptb--120 bg_color--1">
                    <ContactTwo />
                </div> */}
                {/* End Contact Page Area  */}

                {/* Start Contact Map  */}
                {/* <div className="rn-contact-map-area position-relative">
                    <div style={{ height: '650px', width: '100%' }}>
                        <GoogleMapReact
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                        >
                            
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                        />
                        </GoogleMapReact>
                    </div>
                </div> */}
                {/* End Contact Map  */}
                

                {/* Start Brand Area */}
                {/* <div className="rn-brand-area bg_color--5 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandTwo />
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* End Brand Area */}

                {/* Start Back To Top */}
                {/* <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div> */}
                {/* End Back To Top */}
                
                {/* <Footer /> */}
            </React.Fragment>
        )
    }
}
export default Contact