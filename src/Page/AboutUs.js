import React, {Component} from 'react';
import MasterCover from "../MasterPages/MasterCover";
import classes1 from './AboutUs.module.css'
import classes from './Home.module.css'

class AboutUs extends Component {
    render() {
        return (
            <div>
                <MasterCover title="About Me"/>
                <div className=" mx-4 shadow bg-gray rounded p-4">
                    <br/>
                    <h3 className={`text-justify-center ${classes1.h3Tag}`}>My Mission</h3>
                    <hr/>
                    <p className={`f16Light text-justify ${classes1.pTag}`}>My mission is to develop unique idea and quality software
                        that will secure top ranking in marketplace, people's system and people's heart. Develop
                        robust, secure, dynamic, responsive software for all platform (computer, tab, mobile phone).
                        Provide top notch customer service, customization of our product according to customer
                        demand and current technology. Planning advanced techniques for optimization, user
                        experience and satisfaction of customer for our software. Planning flexible software that
                        will not be bounded by any linguistic or regional restriction. I want to flourish software
                        that can blow people's heart and soul.</p>
                    <br/>
                    <h3 className={` text-justify-center ${classes1.h3Tag}`}>My Vision</h3>
                    <hr/>
                    <p className={` text-justify ${classes1.pTag}`}>My vision is to brand our firm as the best firm in the world. Secure the top place among software providers for both local and international market. Brand our country as the best software provider country. Create employment for youth on the field of both software and corporate level. Provide our country and world with superior software. Nurture youths to be highly skilled software engineers.</p>
                </div>
                <div className={`container-fluid px-5  ${classes.whoAmI}`}>
                    <div className={`my-4  p-4`}>
                        <h3 className="f24Light text-center">Who I Am?</h3>
                        <hr/>
                        <div className={`row mb-4 `}>
                            <div className={`col-md-6`}>
                                <p className="text-justify " style={{color: 'black'}}>I am a highly professional, motivated
                                    and dedicated individual with strong communication and interpersonal skills, To Build Up
                                    My Career With A Well Known Organization Where I Can Show My Immense
                                    Aspiration To Become A Quick Learner And To Prove Myself As Sincere, Energetic And
                                    Devoted Educator Through Extensive Hard Working & Integrity, I am working in programming
                                    and web world for more than 1
                                    years.Being a passionate individual with experiences in business field having Computer
                                    Science & Engineering
                                    background will help to use my potentials properly by holding this position. As the
                                    position suites me
                                    best so the career path will be much more flexible than other options. My over all skill
                                    makes me a Web developer, so you can hire me for your projects.
                                    Thanking you in advance for your time.
                                </p>
                            </div>
                            <div className={`col-md-6`}>
                                <div className="progress row-md-4">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                                         role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                                         style={{width: "80%"}}/>
                                    Web Development
                                </div>
                                <hr className={`${classes.ProgressBarHr}`}/>
                                <div className="progress ">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                                         role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                                         style={{width: "75%"}}/>
                                    Embedded System
                                </div>
                                <hr className={`${classes.ProgressBarHr}`}/>
                                <div className="progress ">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated "
                                         role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                                         style={{width: "65%"}}/>
                                    Video Editing
                                </div>
                                <hr className={`${classes.ProgressBarHr}`}/>
                                <div className="progress row-md-4">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                                         role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                                         style={{width: "80%"}}/>
                                    UI Design
                                </div>
                                <hr className={`${classes.ProgressBarHr}`}/>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default AboutUs;