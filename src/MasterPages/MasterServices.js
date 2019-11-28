import React, {Component} from 'react';
import classes from "./MasterService.module.css";
import webSVGLogo from '../assets/coding.svg'
import EmbeededSVGLogo from '../assets/internet-of-things.svg'
import VideoSVGLogo from '../assets/film-editor.svg'

import {Link} from "react-router-dom";

class MasterServices extends Component {
    render() {
        return (
            <div className={`m-4 shadow bg-gray rounded`}>
                <div className={`d-flex flex-column align-items-center justify-content-center shadow rounded ${classes.ServicesDiv}`}>
                    <h1 className={`${classes.nameH1}`}>
                        My Services
                        <hr style={{border: "1px solid white", margin: "10px 0 0 0"}}/>
                    </h1>
                </div>


                <div className={`row m-5`}>
                    <div className={`col-md-4 mb-4`}>
                        <span className={`${classes.serviceImage}`}><img src={webSVGLogo} alt="Web Development"
                                                                         height="42" width="42"></img></span>
                        <p className={`${classes.serviceTitle}`}>Web Development</p>
                        <p className={`${classes.serviceText}`}>I design and develop static and dynamic web sites as per
                            your requirements as we believe,
                            “web is world’s next home”.</p>
                        {/*<Link to="/resume" className={`btn btn-outline-danger  ${classes.link_button}`}>Learn More</Link>*/}
                        {this.props.children}
                    </div>
                    <div className={`col-md-4 mb-4`}>
                        <span className={`${classes.serviceImage}`}><img src={EmbeededSVGLogo}
                                                                         alt="Embedded Development"
                                                                         height="42" width="42"></img></span>
                        <p className={`${classes.serviceTitle}`}>Embedded Development</p>
                        <p className={`${classes.serviceText}`}>I design and develop static and dynamic web sites as per
                            your requirements as we believe,
                            “web is world’s next home”.</p>
                        {this.props.children}
                        {/*<Link to="/resume" className={`btn btn-outline-danger  ${classes.link_button}`}>Learn More</Link>*/}
                    </div>
                    <div className={`col-md-4 mb-4`}>
                        <span className={`${classes.serviceImage}`}><img src={VideoSVGLogo} alt="Video Editing"
                                                                         height="42" width="42"></img></span>
                        <p className={`${classes.serviceTitle}`}>Video Editing</p>
                        <p className={`${classes.serviceText}`}>I design and develop static and dynamic web sites as per
                            your requirements as we believe,
                            “web is world’s next home”.</p>
                        {this.props.children}
                    </div>


                </div>
                <br/>

            </div>
        );
    }
}

export default MasterServices;