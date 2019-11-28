import React, {Component} from 'react';
import {Route,Switch} from "react-router-dom"
import Home from "../Page/Home";
import NotFoundPage from "../Page/NotFoundPage";
import AboutUs from "../Page/AboutUs";
import Portfolio from "../Page/Portfolio";
import Resume from "../Page/Resume";
import Services from "../Page/Services";
import PrivacyPolicy from "../Page/PrivacyPolicy";
import TermsOfUse from "../Page/TermsOfUse";

class MyRouter extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={AboutUs} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/resume" component={Resume} />
                    <Route exact path="/services" component={Services} />
                    <Route exact path="/privacy-policy" component={PrivacyPolicy} />
                    <Route exact path="/terms-of-use" component={TermsOfUse} />
                    <Route  component={NotFoundPage}/>
                </Switch>
            </div>
        );
    }
}

export default MyRouter;