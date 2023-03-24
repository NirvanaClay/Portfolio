import React, { Component } from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor ,FiChevronUp, FiMail, FiCopy, FiSmartphone } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiSmartphone />,
        title: 'Responsive Web Development',
        description: 'Responsive development for HTML websites using CSS or SCSS, making sure the website looks appropriate for all screen sizes.'
    },
    {
        icon: <img src="/assets/images/icons/Javascript-icon.png" />,
        title: 'Frontend Development With Javascript',
        description: 'Strong ability to use javascript, both plain and using the React framework.'
    },
    {
        icon: <img src="/assets/images/icons/Laravel-icon.png" />,
        title: 'Full-Stack Development With Laravel',
        description: 'Ability to develop using PHP with a Laravel framework. Can use Laravel to develop a full-stack application or as a backend API with a MySQL database.'
    },
    {
        icon: <img src="/assets/images/icons/API-icon1.png" />,
        title: 'API Integration',
        description: 'Ability to integrate external APIs using axios.'
    },
    // {
    //     icon: <FiMail />,
    //     title: 'Email Marketing',
    //     description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in.'
    // },
    // {
    //     icon: <FiCopy />,
    //     title: 'Copywriting',
    //     description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for.'
    // },
]

class ServiceTwo extends Component{
    render(){
        let title = 'Skills',
        description = 'There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.',
        subtitle= 'What can I do for you?';
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <h2 className="title">{title}</h2>
                                <span className="subtitle">{subtitle}</span>
                                {/* <p className="description" dangerouslySetInnerHTML={{ __html: description }}></p> */}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {/* <div className="col-lg-12 col-12 mt--30"> */}
                        <div className="col-lg-6 col-6 mt--30">
                            <div className="row service-main-wrapper">
                                {ServiceList.map( (val , i) => (
                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                        <a href="/service-details">
                                            <div className="service service__style--2 text-left">
                                                <div className="icon">
                                                    {val.icon}
                                                </div>
                                                <div className="content">
                                                    <h3 className="title">{val.title}</h3>
                                                    <p>{val.description}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceTwo;
