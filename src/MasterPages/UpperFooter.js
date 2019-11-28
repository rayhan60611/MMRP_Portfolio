import React, {Component} from 'react';
import classes from "./UpperFooter.module.css";
import {Link} from "react-router-dom";
import logoFB from "../assets/facebook.svg";
import logoLINKDIN from "../assets/linkedin.svg";
import logoYoutube from "../assets/youtube.svg";
import logogit from "../assets/github-brands.svg";

class UpperFooter extends Component {
    render() {
        return (

            <div className={`m-4 shadow bg-gray rounded`}>
                <br/>
                <br/>
                <div className={`row justify-content-center`}>
                    <div className="col-md-3 my-4">
                        <h3 className={`${classes.h3Protfolio}`}>Follow Me</h3>
                        <hr className={`${classes.hrProtfolio}`}/>
                        <a className="navbar-brand" href="https://www.facebook.com/Attentive.Stupid" target="__blank">
                            <img src={logoFB} alt={"FB"} height="45"/>
                        </a>
                        <a className="navbar-brand" href="https://www.youtube.com/channel/UC1FGZh1JMobI1YiwGKJpDRw"
                           target="__blank">
                            <img src={logoYoutube} alt={"Youtube"} height="45"/>
                        </a>
                        <a className="navbar-brand" href="https://www.linkedin.com/in/m-m-rayhan-parvez-035919171/"
                           target="__blank">
                            <img src={logoLINKDIN} alt={"Linkedin"} height="45"/>
                        </a>
                        <a className="navbar-brand" href="https://github.com/rayhan60611"
                           target="__blank">
                            <img src={logogit} alt={"GitHub"} height="45"/>
                        </a>
                    </div>
                    <div className="col-md-3 my-4">
                        <h5 className={`${classes.h3Protfolio}`}>Address</h5>
                        <hr className={`${classes.hrProtfolio}`}/>
                        <p className={`${classes.addressPtag}`}><i className="fa fa-home"></i> Mirpur-10 Dhaka,
                            Bangladesh</p>
                        <p className={`${classes.addressPtag}`}><i className="fa fa-envelope"></i> mmrp.cse@gmail.com
                        </p>
                        <p className={`${classes.addressPtag}`}><i className="fa fa-phone"></i> +880-1632404244</p>

                    </div>
                    <div className="col-md-3 my-4">
                        <h5 className={`${classes.h3Protfolio}`}>Information</h5>
                        <hr className={`${classes.hrProtfolio}`}/>

                        <p><Link target="_blank"
                                 className={`blue-berry-link f16Light text-decoration-none ${classes.infoATag}`}
                                 to="/about">About
                            Me</Link></p>

                        <p><Link target="_blank"
                                 className={`blue-berry-link f16Light text-decoration-none ${classes.infoATag}`}
                                 to="/resume">My
                            Resume</Link></p>

                        <p><Link target="_blank"
                                 className={`blue-berry-link f16Light text-decoration-none ${classes.infoATag}`}
                                 to="/resume">Contact
                            Me</Link></p>


                    </div>
                    <div className="col-md-3 my-4">
                        <h5 className={`${classes.h3Protfolio}`}>Legal</h5>
                        <hr className={`${classes.hrProtfolio}`}/>
                        <p><Link target="_blank"
                                 className={`blue-berry-link f16Light text-decoration-none ${classes.infoATag}`}
                                 to="/privacy-policy">Privacy Policy</Link></p>

                        <p><Link target="_blank"
                                 className={`blue-berry-link f16Light text-decoration-none ${classes.infoATag}`}
                                 to="/terms-of-use">Terms of Use</Link></p>
                    </div>
                </div>
                <br/>
            </div>
        );
    }
}

export default UpperFooter;