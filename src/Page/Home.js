import React, {Component} from 'react';
import classes from './Home.module.css'
import {Link} from "react-router-dom";
import MasterServices from "../MasterPages/MasterServices";
import MasterPortfolio from "../MasterPages/MasterPortfolio";

class Home extends Component {
    render() {
        return (
            <div className="bodyDiv ">
                <div className={`d-flex flex-column align-items-center justify-content-center shadow-lg  ${classes.home}`}>
                    <h1 className={`${classes.nameH1}`}>M M Rayhan Parvez</h1>
                    <h3 className={` ${classes.nameH3}`}>Web Developer</h3>
                    <Link to="/resume" className={`btn btn-outline-danger  ${classes.link_button}`}>Learn More</Link>
                </div>
                <div className={`${classes.whoAmI}`}>
                    <div className={`m-4 shadow bg-gray rounded p-4`}>
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
                    <MasterServices><Link to="/services" className={`btn btn-outline-danger  ${classes.link_button}`}>Get Services</Link></MasterServices>
                    <MasterPortfolio/>
                </div>
            </div>
        );
    }
}

export default Home;