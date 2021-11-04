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
    height: 227px;     //待定

    > ul {
      display: flex;
      flex-wrap: wrap;
      padding: 12px 0;
      
      > li {
        width: 33.33333%;
        height: 85px;
        display: flex;
        justify-content: center;
        align-items: center;
        > div{
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          font-size: 16px;
          width: 90%;
          height: 75px;
          border-radius: 20px;
          &.selected {
            background: lavenderblush;

            svg {
              animation: shake 0.3s linear;
            }
          }
          >.icon{
            width: 45px;
            height: 45px;
          }
        }
        @keyframes shake {
          0% {
            transform: rotate(0deg);
          }
          20% {
            transform: rotate(20deg);
          }
          40% {
            transform: rotate(0deg);
          }
          80% {
            transform: rotate(-20deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
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
          <li>
            <div className="selected">
              <Icon name="三餐"/>
              <span>三餐</span>
            </div>
          </li>
          <li>
            <div>
              <Icon name="衣服"/>
              <span>衣服</span>
            </div>
          </li>
          <li>
            <div>
              <Icon name="宠物"/>
              <span>宠物</span>
            </div>
          </li>
          <li>
            <div>
              <Icon name="医疗"/>
              <span>医疗</span>
            </div>
          </li>
          <li>
            <div>
              <Icon name="零食"/>
              <span>零食</span>
            </div>
          </li>
          <li>
            <div>
              <Icon name="学习"/>
              <span>学习</span>
            </div>
          </li>
          <li>
            <div>
              <Icon name="医疗"/>
              <span>医疗</span>
            </div>
          </li>
          <li>
            <div>
              <Icon name="零食"/>
              <span>零食</span>
            </div>
          </li>
          <li>
            <div>
              <Icon name="学习"/>
              <span>学习</span>
            </div>
          </li>
          <li>
            <div>
              <Icon name="设置"/>
              <span>设置</span>
            </div>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export {LabelSection};