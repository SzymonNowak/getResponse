import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Challenge from './views/Challenge';
import Dashboard from './views/Dashboard';
import Recipes from './views/Recipes';
import MainTemplate from './templates/MainTemplate';
import { routes } from './routes/index';
const Root = () => (

    <BrowserRouter>
      <MainTemplate>
        <Switch>
                <Route  exact path={routes.home} render={() => <Redirect to="/dashboard" /> }/>
                <Route   exact path={routes.dashboard} component={Dashboard}/>


                <Route  exact path={routes.challenge} component={Challenge}/>


                <Route  exact path={routes.recipes} component={Recipes}/>


              </Switch>
      </MainTemplate>
     

    </BrowserRouter>

);

export default Root;
