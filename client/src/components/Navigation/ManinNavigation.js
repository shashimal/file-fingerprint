import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Uploader from "../Upload/Uploader";
import Blockchain from "../Blockchain/Blockchain";


const MainNavigation = () => (
    <Switch>
        <Route exact path='/' component={Uploader}></Route>
        <Route  path='/blockchain' component={Blockchain}></Route>
    </Switch>
);

export default MainNavigation;