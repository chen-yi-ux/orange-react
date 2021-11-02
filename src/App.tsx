import React from 'react';
import {Route, HashRouter as Router, Switch, Link, Redirect} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`
const Nav = styled.nav`
  border: 1px solid blue;
  > ul {
    display: flex;
    > li {
      width: 33.33%;
      text-align: center;
      padding: 16px;
    }
  }
`
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

        <Nav>
          <ul>
            <li>
              <Link to="/detail">明细</Link>
            </li>
            <li>
              <Link to="/money">记一笔</Link>
            </li>
            <li>
              <Link to="/chart">图表</Link>
            </li>
          </ul>
        </Nav>
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
