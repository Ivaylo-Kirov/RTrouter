import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Home} from './home';
import {About} from './about';
import {Always404} from './always404';
import {NavLink} from 'react-router-dom';
import './style.css';

class AppRouter extends React.Component {
    render() {
        return(
            <div>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about' activeClassName="active-link">About</NavLink></li>
                    <li><NavLink to='/brokenlink' activeClassName="active-link">BrokenLink</NavLink></li>
                </ul>
                    <Switch>
                        <Route path='/' exact component={Home} /> 
                        <Route path='/about' component={About} />
                        <Route component={Always404} />
                    </Switch>
            </div>
        );
    }
}

export {AppRouter};