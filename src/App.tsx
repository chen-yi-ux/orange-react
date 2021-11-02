import React from 'react';
import {Route, HashRouter as Router, Switch, Redirect} from 'react-router-dom';
import styled from 'styled-components';
import {Nav} from 'components/Nav';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Route exact path="/money">
              <Money />
            </Route>
            <Route exact path="/chart">
              <Chart />
            </Route>
            <Route exact path="/detail">
              <Detail />
            </Route>
            <Redirect exact from="/" to="/detail"/>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Main>

        <Nav/>
      </Wrapper>
    </Router>
  );
}

function NoMatch(){
  return <div>页面不存在</div>
}

function Money(){
  return <div>money</div>
}
function Chart(){
  return <div>chart</div>
}
function Detail(){
  return <div>detail</div>
}

export default App;
