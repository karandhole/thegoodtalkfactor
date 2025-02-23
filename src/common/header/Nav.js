import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
    const location = useLocation(); // Get current page path

    return (
        <div className="main-menu text-center">
            <nav>
                <ul className="main-menu__list">
                    <li className={location.pathname === '/' ? 'active' : ''}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={location.pathname === '/about' ? 'active' : ''}>
                        <Link to="/about">About</Link>
                    </li>
                    <li className={`dropdown ${location.pathname.startsWith('/team') ? 'active' : ''}`}>
                        <Link to="#">Pages</Link>
                        <ul>
                            <li className={location.pathname === '/team' ? 'active' : ''}>
                                <Link to="/team">Team</Link>
                            </li>
                            <li className={location.pathname === '/team-details' ? 'active' : ''}>
                                <Link to="/team-details">Team Details</Link>
                            </li>
                            <li className={location.pathname === '/projects' ? 'active' : ''}>
                                <Link to="/project-details">Projects</Link>
                            </li>
                            {/* <li className={location.pathname === '/project-details' ? 'active' : ''}>
                                <Link to="/project-details">Project Details</Link>
                            </li> */}
                        </ul>
                    </li>
                    <li className={`dropdown ${location.pathname.startsWith('/donation') ? 'active' : ''}`}>
                        <Link to="#">Donation</Link>
                        <ul>
                            <li className={location.pathname === '/donation' ? 'active' : ''}>
                                <Link to="/donation">Donation</Link>
                            </li>
                            <li className={location.pathname === '/donation-list' ? 'active' : ''}>
                                <Link to="/donation-list">Donation List</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={location.pathname === '/events' ? 'active' : ''}>
                        <Link to="/events">Events</Link>
                    </li>
                    <li className={`dropdown ${location.pathname.startsWith('/blog') ? 'active' : ''}`}>
                        <Link to="/blog-v-1">Blog</Link>
                        {/* <ul>
                            <li className={location.pathname === '/blog-v-1' ? 'active' : ''}>
                                <Link to="/blog-v-1">Blog V-1</Link>
                            </li>
                            <li className={location.pathname === '/blog-v-2' ? 'active' : ''}>
                                <Link to="/blog-v-2">Blog V-2</Link>
                            </li>
                        </ul> */}
                    </li>
                    <li className={location.pathname === '/contact' ? 'active' : ''}>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
