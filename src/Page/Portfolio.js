import React, {Component} from 'react';
import classes from "../Page/Portfolio.module.css";
import MasterPortfolio from "../MasterPages/MasterPortfolio";

class Portfolio extends Component {
    render() {
        return (
            <div>
            <div className={` m-4 shadow bg-gray rounded ${classes.bodyDiv}`}>
                <div className={`d-flex flex-column align-items-center justify-content-center shadow rounded ${classes.ServicesDiv}`}>
                    <h1 className={`${classes.nameH1}`}>
                        My Portfolio
                        <hr style={{border: "1px solid white", margin: "10px 0 0 0"}}/>
                    </h1>
                </div>

            </div>
                <MasterPortfolio/>
            </div>
        );
    }
}

export default Portfolio;