import {Icon} from 'components/Icon';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  > .title {
    font-size: 18px;
    padding-top: 13px;
    display: flex;
    align-items: center;
    height: 45px;

    > span {
      padding-left: 5px;
      color: #636363;
    }
  }

  > .content {
    overflow: auto;

    > ul {
      display: flex;
      flex-wrap: wrap;
      padding: 12px 0;
      border: 1px solid red;

      > li {
        width: 33.33333%;
        height: 85px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
const LabelSection = () => {
  return (
    <Wrapper>
      <div className="title">
        <Icon name="label"/>
        <span>分类</span>
      </div>
      <div className="content">
        <ul>
          <li>图1</li>
          <li>图2</li>
          <li>图3</li>
          <li>图4</li>
        </ul>
      </div>
    </Wrapper>
  );
};

export {LabelSection};