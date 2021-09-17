import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "./App.css";
import About from './components/About/About';
import Dashboard from './components/Dashboard/Dashboard';
import Events from './components/Events/Events';
import Team from './components/Team/Team';

const App = () => {
    return (
        <div>
            <Router>
                <div>
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/home' exact component={Dashboard} />
                    <Route path='/about' exact component={About} />
                    <Route path='/events' exact component={Events} />
                    <Route path='/team' exact component={Team} />
                </div>
            </Router>
        </div>
    )
}

export default App
