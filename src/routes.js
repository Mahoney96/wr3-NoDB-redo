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