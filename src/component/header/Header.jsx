import React, { Component, useRef, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FiX , FiMenu } from "react-icons/fi";


const Header = ({ portfolioScroll, skillsScroll, aboutScroll, contactScroll }) => {
    const [showSmallMenu, setShowSmallMenu] = useState(false)
    const [showSandwich, setShowSandwich] = useState(false)
    const [showMainNav, setShowMainNav] = useState(true)
    const sandwichRef = useRef(null);
    const smallNavItemsRef = useRef(null);

    useEffect(() => {
        const handleSandwichClick = () => {
            setShowSmallMenu(!showSmallMenu);
            console.log("Running setShowSmallMenu, which has a value of:")
            console.log(showSmallMenu)
        };
        const handleResize = () => {
            if(window.innerWidth < 600){
                setShowSandwich(true)
                setShowMainNav(false)
                console.log("small screen, so showSandwich is:")
                console.log(showSandwich)
            }
            else{
                setShowSandwich(false)
                setShowMainNav(true)
            }
        }
        if (sandwichRef.current) {
            sandwichRef.current.addEventListener('click', handleSandwichClick);
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => {
            if (sandwichRef.current) {
                sandwichRef.current.removeEventListener('click', handleSandwichClick);
            }
            window.removeEventListener('resize', handleResize);
        };
    })
    return(
        <header className='header-area header--fixed formobile-menu header--transparent'>
            <div className="header-wrapper" id="header-wrapper">
                <div className="header-left">
                {/* <div> */}
                    {/* <div className="logo"> */}
                    <div>
                        <h4>Clay Raymond</h4>
                    </div>
                </div>
                <div className="header-right">
                    <nav className="main-nav-container">
                        <ul className={`main-nav ${showMainNav ? 'show' : ''}`}>
                            <li><a onClick={portfolioScroll}>Projects</a></li>
                            <li><a onClick={skillsScroll}>Skills</a></li>
                            <li><a onClick={aboutScroll}>About</a></li>
                            <li><a onClick={contactScroll}>Contact</a></li>
                        </ul>
                    </nav>
                </div>
                {showSandwich &&
                    <div className='small-container'>
                        <div className='sandwich' ref={sandwichRef}>
                            <i className="fas fa-bars"></i>
                        </div>
                    </div>
                }
                <div className='small-menu' ref={smallNavItemsRef}>
                    <ul className={`links ${showSmallMenu ? 'show' : ''}`}>
                        <li><a onClick={portfolioScroll}>Projects</a></li>
                        <li><a onClick={skillsScroll}>Skills</a></li>
                        <li><a onClick={aboutScroll}>About</a></li>
                        <li><a onClick={contactScroll}>Contact</a></li>
                    </ul>
                </div>
            </div>
            
        </header>
    )
}
export default Header;