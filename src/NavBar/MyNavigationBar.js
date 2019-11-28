import React, {Component} from 'react';
import { NavLink} from "react-router-dom";
import logo from "../assets/MMRP.svg"
import classes from "./MyNavigationBar.module.css"

class MyNavigationBar extends Component {
    render() {
        return (<div className={classes.navBody}>
            <nav className={`navbar shadow-sm navbar-expand-sm navbar-dark bg-dark fixed-top ${classes.navGradient}`}>
                <NavLink className="navbar-brand" to="/">
                    <img src={logo} alt={"MMRP"} height="45"/>
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                        aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarColor01">
                    <ul className="navbar-nav ml-auto mr-5 font-weight-bold">
                        <li className="nav-item">
                            <NavLink exact activeStyle={{color:"red"}}  className="nav-link" to="/">HOME</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeStyle={{color:"yellow"}} className="nav-link" to="/about">ABOUT</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeStyle={{color:"lime"}} className="nav-link" to="/services">SERVICES</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeStyle={{color:"springgreen"}} className="nav-link" to="/portfolio">PORTFOLIO</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeStyle={{color:"aqua"}} className="nav-link" to="/resume">RESUME</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>


         </div>
        );
    }
}

export default MyNavigationBar;