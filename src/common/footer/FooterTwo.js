import React from 'react';
import {Link} from 'react-router-dom';

export default class FooterTwo extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <footer className="site-footer">
                    <div className="site-footer__top">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                    <div className="footer-widget__column footer-widget__about">
                                        <div className="footer-widget__about-logo">
                                            <Link to={process.env.PUBLIC_URL + `/`}><img src={publicUrl+"assets/images/resources/logo1.jpg"} style={{width:"80px",height:"80px"}} alt="" /></Link>
                                        </div>
                                        <ul className="list-unstyled footer-widget__list">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-back-in-time"></span>
                                                </div>
                                                <div className="text">
                                                    <p>Open Hours of Government: Mon - Fri: 8.00 am. - 6.00 pm.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-place"></span>
                                                </div>
                                                <div className="text">
                                                <p>Gandhi Heights, Vivekananda Nagar,<br/> Kukatpally, Telangana</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-call"></span>
                                                </div>
                                                <div className="text">
                                                    <p><a href="tel:09969569535">099 695 695 35</a></p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="footer-widget__social">
                                            <a href="#"><i className="fab fa-facebook"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                    <div className="footer-widget__column footer-widget__service clearfix">
                                        <h3 className="footer-widget__title">Service</h3>
                                        <ul className="footer-widget__service-list list-unstyled clearfix">
                                            <li><Link to={process.env.PUBLIC_URL + `/about`}>Why choose us</Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/about`}>Our solutions</Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/about`}>Partners</Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/about`}>Core values</Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/projects`}>Our projects</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                    <div className="footer-widget__column footer-widget__links clearfix">
                                        <h3 className="footer-widget__title">Quick Link</h3>
                                        <ul className="footer-widget__links-list list-unstyled clearfix">
                                            <li><Link to={process.env.PUBLIC_URL + `/donate-now`}>How To Donate</Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/about`}>Business</Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/donation`}>Online Service</Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/about`}>Visiting</Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/about`}>Employment</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                    <div className="footer-widget__column footer-widget__map clearfix">
                                        <h3 className="footer-widget__title">Our Maps</h3>
                                        <div className="footer-widget__map-box">
                                            <iframe
                                                title="Map"
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.2096769687214!2d78.41161237462931!3d17.497501499624708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91c6c0c6da43%3A0xd8a1fd6ab28d0ab1!2sGandhi%20Heights!5e0!3m2!1sen!2sin!4v1740374228469!5m2!1sen!2sin"
                                                className="footer-widget-map__one" allowfullscreen></iframe>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="site-footer__bottom">
                        <div className="container">
                            <div className="site-footer__bottom-inner">
                                <p className="site-footer__bottom-text">© 2025 Copyright by <a href="https://azown.in">Azown Technology</a></p>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}