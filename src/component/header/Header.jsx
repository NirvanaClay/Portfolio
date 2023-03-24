import React, { Component, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FiX , FiMenu } from "react-icons/fi";


const Header = ({ portfolioScroll, skillsScroll, aboutScroll, contactScroll }) => {
    console.log("This is the Header component.")
        
        return(
            <header className='header-area header--fixed formobile-menu header--transparent'>
                <div className="header-wrapper" id="header-wrapper">
                    <div className="header-left">
                        <div className="logo">
                            <h4>Clay Raymond</h4>
                        </div>
                    </div>
                    <div className="header-right">
                        <nav className="mainmenunav d-lg-block">
                            <ul className="mainmenu">
                                <li className="has-droupdown"><a onClick={portfolioScroll}>Projects</a>
                                    <ul className="submenu">
                                        <li><Link to="/blog">Guy's Restaurant</Link></li>
                                        <li><Link to="/blog-details">Expense Tracker</Link></li>
                                    </ul>
                                </li>
                                <li className="has-droupdown"><a onClick={skillsScroll}>Skills</a></li>
                                <li><a onClick={aboutScroll}>About</a></li>
                                <li><a onClick={contactScroll}>Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                
            </header>
        )
    // }
}
export default Header;