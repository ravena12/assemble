import React from 'react';
import  Home  from './home';
import Billing from './billing';
import { Switch, Route } from 'react-router-dom';
import ReviewCart from './reviewCart';
import OrderStatus from './orderStatus';

const Router = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/reviewCart" component={ReviewCart} />
        <Route path="/billing" component={Billing} />
        <Route path="/orderStatus" component={OrderStatus} />
    </Switch>
)

export default Router;