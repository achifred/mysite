import React, { Component } from "react";
import Home from "./component/home";
import Resume from "./component/resume";
import Project from "./component/project";
import Skills from "./component/skills";

import { Navbar } from "./component/navbar";
import ReactGA from "react-ga";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
    initializeAnalytics = () => {
        ReactGA.initialize("UA-000000-01");
        ReactGA.pageview(window.location.pathname + window.location.search);
    };

    render() {
        this.initializeAnalytics();
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/resume" component={Resume} exact />
                        <div>
                            <Navbar />
                            <Route path="/project" component={Project} exact />
                            <Route path="/skill" component={Skills} exact />
                        </div>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
