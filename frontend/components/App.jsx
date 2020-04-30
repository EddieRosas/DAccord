import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container'
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import NavBarContainer from './navbar/navbar_container'
import ChannelsIndexContainer from './channels/channels_index_container'


const App = () => {
        return(
            <div className="app">

                <Switch>
                    
                    <ProtectedRoute path="/channels/@me" component={ChannelsIndexContainer}/>
                    <AuthRoute exact path='/signup' component={SignupFormContainer} />
                    <AuthRoute exact path="/login" component={LoginFormContainer} />
                    <Route exact path='/' component={SplashContainer} />
                </Switch>
            </div>
        )
}

export default App;