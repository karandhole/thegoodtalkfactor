import React from 'react';
import { Link } from 'react-router-dom';

export default class TwoSectionOne extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="two-section">
                    <div className="two-section__wrapper">
                        <div className="two-section__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/two-section-left-bg.jpg)'}}>
                            <div className="two-section__content-box">
                                <h6 className="two-section__title ">OUR VISION</h6>
                                <p className="two-section__sub-title">To engage in inclusive and constructive conversations, creating a world where every unheard voice is recognized, every unsung human is celebrated, and interactions become catalysts for positive change. <br/><br/></p>
                                {/* <Link to={process.env.PUBLIC_URL + `/about`} className="thm-btn two-section__btn-1">View All</Link> */}
                            </div>
                        </div>
                        <div className="two-section__right wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/two-section-right-bg.jpg)'}}>
                            <div className="two-section__content-box">
                                <h6 className="two-section__title ">OUR MISSION</h6>
                                <p className="two-section__sub-title">To challenge the societal concept of celebrity and fame by ensuring that every story is respected and valued. TGTF is committed to creating safe and judgment-free spaces where individuals can freely express their experiences and inspire others.</p>
                                {/* <Link to={process.env.PUBLIC_URL + `/about`} className="thm-btn two-section__btn-2">See More</Link> */}
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}