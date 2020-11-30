import './App.css';
import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import About from './components/About';
import AddProfileForm from './containers/AddProfile';
import AuthorInfo  from './components/AuthorInfo';
import AppInfo  from './components/AppInfo';
import Feedback from './components/Feedback';
import EditProfileForm from './components/EditProfile';

//JSX= Javascript + HTML

export default class App extends Component {

    render() {
        //Lazy loading of Home component
        const HomeComponent = React.lazy(()=>import('./containers/Home'))
        return (
            <Router>
                <div>
                    <NavBar />
                    <div className="container-fluid">
                        {/* Suspense is required to use the React.lazy() loaded components */}
                        <Suspense fallback={<div><h5>Loading...</h5></div>} >
                        <Switch>
                            <Route exact path="/">
                                <HomeComponent />
                            </Route>
                            <Route path="/profiles/new">
                                <AddProfileForm/>
                            </Route>
                            <Route path="/profiles/edit/:id" render = { ({match})=><EditProfileForm match={match}/>}>                                
                            </Route>
                            <Route path="/about">
                                <About>
                                    <AuthorInfo author="Sonu Sathyadas"/>
                                    <AppInfo/>
                                </About>
                            </Route>
                            <Route path="/feedback">
                                <Feedback/>
                            </Route>
                        </Switch>
                        </Suspense>
                    </div>
                </div>
            </Router>
        );
    }
}
