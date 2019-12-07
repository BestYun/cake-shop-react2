import React from "react";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import IndexPage from '../pages/index'

export default function RouterIndex() {
    return (
        <Router>
            <Route path='/' exact component={IndexPage}></Route>
        </Router>
    )
}