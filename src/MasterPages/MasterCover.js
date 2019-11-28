import React, {Component} from 'react';
import classes from './MasterCover.module.css'
import MasterPortfolio from "./MasterPortfolio";

class MasterCover extends Component {
    render() {
        console.log(this.props.children)
        return (
            <div>
                <div className={` m-4 shadow bg-gray rounded ${classes.bodyDiv}`}>
                    <div className={`d-flex flex-column align-items-center justify-content-center shadow rounded ${classes.ServicesDiv}`}>
                        <h1 className={`${classes.nameH1}`}>
                            {this.props.title}
                            <hr style={{border: "1px solid white", margin: "10px 0 0 0"}}/>
                        </h1>
                        <h3 className={`mt-2 ${classes.nameH3}`}>
                            {this.props.titleH3}
                        </h3>
                    </div>
                </div>

            </div>
        );
    }
}

export default MasterCover;