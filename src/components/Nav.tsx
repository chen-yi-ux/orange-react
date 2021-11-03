import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import {Icon} from './Icon';

const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  > ul {
    display: flex;
    justify-content: center;
    align-items: center;
    > li {
      width: 33.3333%;
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
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/detail">
            <Icon name="detail"/>
            明细
          </Link>
        </li>
        <li>
          <Link to="/money" className="money">
            记一笔
          </Link>
        </li>
        <li>
          <Link to="/chart">
            <Icon name="chart"/>
            图表
          </Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export {Nav};