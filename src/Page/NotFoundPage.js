import React, {Component} from 'react';
import classes from "./Resume.module.css";
import {Link} from "react-router-dom";

class NotFoundPage extends Component {
    render() {
        return (
            <div
                className={`shadow-lg rounded m-4 d-flex align-items-center flex-column justify-content-center flex-wrap p-4 ${classes.NotFoundPage}`}>
                <h1 className={`my-4  ${classes.resumeNamePTag}`}>Ops! Something Went Worng</h1>
                <Link to="/"
                   className={`p-2 btn btn-outline-light  ${classes.resumeButtonTag}`}>Go To Home Page</Link>
                <br/>
                    <p className={`  ${classes.resumeNamePTag}`}>The webpage you are looking for might be temporarily down or it may have moved permanently to a new web address</p>

            </div>
        );
    }
}

export default NotFoundPage;