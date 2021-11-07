import {Layout} from 'components/Layout';
import React from 'react';
import {Icon} from 'components/Icon';
import styled from 'styled-components';
import {DatePicker} from 'components';
import dayjs from 'dayjs';
import locale from 'antd/es/date-picker/locale/zh_CN';

const Header = styled.div`
  background: #FF983B;
  height: 120px;

  > .main {
    height: 60px;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;

    > .icon {
      width: 50px;
      height: 50px;
      margin-top: 8px;
    }

    > span {
      color: white;
      font-size: 32px;
      margin-top: 5px;
    }
  }

  > .main-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    height: 60px;
    color: #FCF8E8;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);

    > .time {
      width: 100px;
      background: transparent;
    }

    > .money {
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      > .income {
        width: 48%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        flex-wrap: wrap;
        padding-left: 10px;

        > .income-content {
          margin-right: 10px;
        }

        > .income-amount {
        }
      }

      > .expenses {
        width: 48%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        flex-wrap: wrap;
        padding-right: 10px;

        > .expenses-content {
          margin-right: 10px;
        }

        > .expenses-amount {

        }
      }
    }
  }
`;
const Main = styled.div`
  height: calc(100% - 120px);
  overflow: auto;

  > ol > li {
    border-bottom: 1px solid #e3e3e3;

    > .item1 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #F9F9F9;
      padding: 4px 10px;
      color: #B0ACAC;
      font-size: 14px;
    }
    > ol {
      > li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 10px;
        font-size: 18px;
        color: black;
        > .name {
          display: flex;
          justify-content: center;
          align-items: center;
          > .icon {
            width: 30px;
            height: 30px;
          }
          > span {
            padding-left: 10px;
          }
        }
        > .amount {
          color: #306ECC;
        }
      }
    }
  }
`;

function Detail() {
  return (
    <Layout>
      <Header>
        <div className="main">
          <Icon name="orange"/>
          <span>橙子记账本</span>
        </div>
        <div className="main-wrapper">
          <div className="time">
            <DatePicker picker="month" locale={locale} value={dayjs()}/>
          </div>
          <div className="money">
            <div className="income">
              <span className="income-content">收入</span>
              <span className="income-amount">1000</span>
            </div>
            <div className="expenses">
              <span className="expenses-content">支出</span>
              <span className="expenses-amount">110</span>
            </div>
          </div>
        </div>
      </Header>
      <Main>
        <ol>
          <li>
            <div className="item1">
              <span>今天</span>
              <span>100</span>
            </div>
            <ol>
              <li>
                <div className="name">
                  <Icon name="三餐"/>
                  <span>三餐</span>
                </div>
                <div className="amount">-100</div>
              </li>
              <li>
                <div className="name">
                  <Icon name="三餐"/>
                  <span>三餐</span>
                </div>
                <div className="amount">-100</div>
              </li>
            </ol>
          </li>
          <li>
            <div className="item1">
              <span>昨天</span>
              <span>100</span>
            </div>
            <ol>
              <li>
                <div className="name">
                  <Icon name="三餐"/>
                  <span>三餐</span>
                </div>
                <div className="amount">-100</div>
              </li>
              <li>
                <div className="name">
                  <Icon name="三餐"/>
                  <span>三餐</span>
                </div>
                <div className="amount">-100</div>
              </li>
            </ol>
          </li>
        </ol>
      </Main>
    </Layout>
  );
}

export {Detail};