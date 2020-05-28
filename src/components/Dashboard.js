import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './NavBar';
import Home from './Home';
// import AddQuestion from './AddQuestion';
// import Leaderboard from './Leaderboard';
// import Question from './Question';
import NotFound from './NotFound';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <NavBar></NavBar>
                <Switch>
                    <Route exact path="/" component={Home} />
                    {/* <Route exact path="/add" component={AddQuestion} /> */}
                    {/* <Route exact path="/leaderboard" component={Leaderboard} /> */}
                    {/* <Route exact path="/questions/:question_id" component={Question} /> */}
                    <Route component={NotFound} />
                </Switch>
            </div>
        )
    }
}

export default Dashboard;