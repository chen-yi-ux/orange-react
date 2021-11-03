import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
require('icons/detail.svg');
require('icons/chart.svg');

const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  > ul {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 0;
    > li {
      width: 33.3333%;
      text-align: center;
      font-size: 12px;
      padding: 4px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      &.money{
        background: #FF983B;
        color: white;
        font-size: 18px;
        border-radius: 35px;
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <svg className="icon">
            <use xlinkHref="#detail"/>
          </svg>
          <Link to="/detail">
            明细
          </Link>
        </li>
        <li className="money">
          <Link to="/money">记一笔</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#chart"/>
          </svg>
          <Link to="/chart">图表</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export {Nav};