import React from "react";
import {Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";



export default (
    <Switch>
    <Route component={Header} exact path='/'/>
    <Route component={Bin} exact path='/'/>
    <Route component={} exact path='/'/>
    </Switch>
)


// React-router-Dom- 


// IF React is rendering the Front-end display for users, express is the server structure node is run on that the res, res calls are made with through axios. Massive takes the db and converts it into readbale Javascript js so it can quiered by the request endpoint calls. Express checks the response. 