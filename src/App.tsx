import React from 'react';
import {Route, HashRouter as Router, Switch, Redirect} from 'react-router-dom';
import {Layout} from 'components/Layout';

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

function NoMatch() {
  return <div>页面不存在</div>;
}

function Money() {
  return (
    <Layout>
      <div>money</div>
    </Layout>
  );
}

function Chart() {
  return (
    <Layout>
      <div>chart</div>
    </Layout>
  );
}

function Detail() {
  return (
    <Layout>
      <div>detail</div>
    </Layout>
  );
}

export default App;
