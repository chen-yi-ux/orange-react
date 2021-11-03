import React from 'react';
import {Route, HashRouter as Router, Switch, Redirect} from 'react-router-dom';
import {Detail} from 'views/Detail';
import {Chart} from 'views/Chart';
import {Money} from 'views/Money';
import {NoMatch} from 'views/NoMatch';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/money">
          <Money/>
        </Route>
        <Route exact path="/chart">
          <Chart/>
        </Route>
        <Route exact path="/detail">
          <Detail/>
        </Route>
        <Redirect exact from="/" to="/detail"/>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
