import React, { Component } from 'react'
import './AppNavBar.css'
import { Link } from "react-scroll";
import ResponsiveMenu from 'react-responsive-navbar';
export default class AppNavBar extends Component {
    render() {
        return (
            <nav className="app-navBar-container">
                <ResponsiveMenu
                    menuOpenButton={<div ><p>Open</p></div>}
                    menuCloseButton={<div ><p>Close</p></div>}
                    changeMenuOn="600px"
                    largeMenuClassName="large-menu"
                    smallMenuClassName="small-menu"
                    menu={
                        <ul>
                            <Link
                                className="link"
                                activeClass="active"
                                to="About"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >ABOUT</Link>
                            <Link
                                className="link"
                                activeClass="active"
                                to="Discography"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >DISCOGRAPHY</Link>
                            <Link
                                className="link"
                                activeClass="active"
                                to="ConcertTours"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >CONCERT TOURS</Link>
                            <Link
                                className="link"
                                activeClass="active"
                                to="LatterCompositions"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >LATTER COMPOSITIONS</Link>
                            <Link
                                className="link"
                                activeClass="active"
                                to="NewTracks"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >NEW TRACKS</Link>
                            <Link
                                className="link"
                                activeClass="active"
                                to="UpcomingEvents"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >UPCOMING EVENTS</Link>
                            <Link
                                className="link"
                                activeClass="active"
                                to="History"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >HISTORY</Link>
                            <Link
                                className="link"
                                activeClass="active"
                                to="Contact"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >CONTACT</Link>
                        </ul>
                    }
                />
            </nav>
        )
    }
}
