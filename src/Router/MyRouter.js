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
                    <Route path="/about" component={AboutUs} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/services" component={Services} />
                    <Route path="/privacy-policy" component={PrivacyPolicy} />
                    <Route path="/terms-of-use" component={TermsOfUse} />
                    <Route  component={NotFoundPage}/>
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        );
    }
}

export default MyRouter;