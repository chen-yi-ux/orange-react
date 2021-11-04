import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import {Icon} from './Icon';

const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  > ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
    > li {
      width: 33.33%;
      text-align: center;
      font-size: 12px;
      padding: 4px 0;
      > a{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 46px;
        &.money{
          background: #FF983B;
          color: white;
          font-size: 18px;
          border-radius: 35px;
        }
        &.selected{
          color: #FF983B;
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/detail" activeClassName="selected">
            <Icon name="detail"/>
            明细
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" className="money">
            记一笔
          </NavLink>
        </li>
        <li>
          <NavLink to="/chart" activeClassName="selected">
            <Icon name="chart"/>
            图表
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}

export {Nav};