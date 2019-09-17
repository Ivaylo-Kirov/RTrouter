import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Home} from './home';
import {About} from './about';
import {Topic} from './topic';
import {Always404} from './always404';
import './style.css';
import Navigation from './Navigation';

class AppRouter extends React.Component {
    render() {
        return(
            <div>
                <header>
                    <Navigation />
                </header>
                <Switch>
                    <Route path='/' exact component={Home} /> 
                    <Route path='/about' component={About} />
                    <Route path='/topic/:topicId' component={Topic} />
                    <Route component={Always404} />
                </Switch>
            </div>
        );
    }
}

export {AppRouter};