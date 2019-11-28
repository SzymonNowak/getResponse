import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Challenge from './views/Challenge';
import Dashboard from './views/Dashboard';
import Recipes from './views/Recipes';
import { routes } from './routes/index';
const Root = () => (

    <BrowserRouter>

          <Switch>
            {/* <Route  exact path={routes.home} render={() => <Redirect to={routes.dashboard} /> }/> */}
            <Route   path={routes.dashboard} component={Dashboard}/>


            <Route  exact path={routes.challenge} component={Challenge}/>


            <Route  exact path={routes.recipes} component={Recipes}/>


          </Switch>

    </BrowserRouter>

);

export default Root;
