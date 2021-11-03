import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  > ul {
    display: flex;
    font-size: 24px;
    box-shadow: 0 2px 2px #e3e3e3;

    > li {
      width: 50%;
      height: 46px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      &.selected {
        color: #FF983B;
      }

      &.selected::after {
        content: '';
        position: absolute;
        margin: auto;
        bottom: 0;
        right: 0;
        left: 0;
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid #FF983B;
      }
    }
  }
`;
const CategorySection = () => {
  return (
    <Wrapper>
      <ul>
        <li className="selected">收入</li>
        <li>支出</li>
      </ul>
    </Wrapper>
  );
};

export {CategorySection};