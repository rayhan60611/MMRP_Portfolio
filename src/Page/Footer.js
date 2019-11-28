import React, {Component} from 'react';
import classes from './Footer.module.css'
class Footer extends Component {
    render() {
        return (
            <div className="container-fluid p-2 text-center  bg-dark">
                <p className={`mt-3 text-white ${classes.footerPTag}`}>
                    All Rights Reserved By M M Rayhan Parvez © 2019-2020
                </p>

            </div>
        );
    }
}

export default Footer;