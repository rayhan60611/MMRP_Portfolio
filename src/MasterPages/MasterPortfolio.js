import React, {Component} from 'react';
import classes from './MasterPortfolio.module.css'
import {Link} from "react-router-dom";

class MasterPortfolio extends Component {
    render() {
        return (
            <div className={`m-4 shadow bg-gray rounded px-4`}>
                <br/>
                <h3 className={`${classes.h3Protfolio}`}>LATEST PROJECT</h3>
                <hr className={`${classes.hrProtfolio}`}/>
                <div className={`d-flex justify-content-center flex-wrap`}>
                    <div className="col-md-6 col-sm-12 col-lg-3">
                        <div className="card mb-4 p-2 shadow-lg "
                             style={{backgroundColor: 'rgba(249,244,247,0.94)'}}>
                            <img src={require("../assets/mokeyCoding.png")} className="card-img-top" alt="image"></img>
                            <div className="card-body ">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                                <Link to="/portfolio" className="btn btn-outline-danger">Details</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-3 col-lg-3">
                        <div className="card mb-4 p-2 shadow-lg"
                             style={{backgroundColor: 'rgba(249,244,247,0.94)'}}>
                            <img src={require("../assets/mokeyCoding.png")} className="card-img-top" alt="image"></img>
                            <div className="card-body ">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                                <Link to="/portfolio" className="btn btn-outline-danger">Details</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-3">
                        <div className="card mb-4 p-2 shadow-lg"
                             style={{backgroundColor: 'rgba(249,244,247,0.94)'}}>
                            <img src={require("../assets/mokeyCoding.png")} className="card-img-top" alt="image"></img>
                            <div className="card-body ">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                                <Link to="/portfolio" className="btn btn-outline-danger">Details</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-3">
                        <div className="card mb-4 p-2 shadow-lg"
                             style={{backgroundColor: 'rgba(249,244,247,0.94)'}}>
                            <img src={require("../assets/mokeyCoding.png")} className="card-img-top" alt="image"></img>
                            <div className="card-body ">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                                <Link to="/portfolio" className="btn btn-outline-danger">Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>

            </div>
        );
    }
}

export default MasterPortfolio;