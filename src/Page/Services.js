import React, {Component} from 'react';
import MasterServices from "../MasterPages/MasterServices";
import classes from './Services.module.css'



class Services extends Component {
    render() {
        return (

            <div  className={`${classes.services}`}>
                <MasterServices/>
            </div>
        );
    }
}

export default Services;