import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container'
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import MainContainer from './main/main_container'

const App = () => {
        return(
            <div className="app">   

                {/* <Switch> */}
                    
                    <Route exact path='/' component={SplashContainer} />
                    <AuthRoute exact path='/signup' component={SignupFormContainer} />
                    <AuthRoute exact path="/login" component={LoginFormContainer} />
                    <ProtectedRoute path="/channels/" component={MainContainer}/>
                {/* </Switch> */}
            </div>
        )
}

export default App;