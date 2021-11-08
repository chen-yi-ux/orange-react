import React from 'react';
import {Icon} from 'components/Icon';
import styled from 'styled-components';
import {DatePicker} from 'components';
import locale from 'antd/es/date-picker/locale/zh_CN';
import dayjs from 'dayjs';

const All = styled.div`
  height: 100vh;
`;
const Header = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 6px;
  padding-top: 10px;
  border-bottom: 1px solid #e3e3e3;
  color: black;

  > .icon {
    width: 25px;
    height: 25px;
    margin-top: 2px;
  }

  > span {
    padding-left: 8px;
    font-size: 20px;
  }
`;
const Main = styled.div`
  height: calc(100% - 60px);
  background: #fbfbfc;

  > .money {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    height: 80px;
    border-bottom: 1px solid #306ECC;
    padding-right: 12px;
    padding-top: 18px;

    > .label {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30%;
      padding-left: 10px;
      color: black;

      > .icon {
        width: 40px;
        height: 40px;
      }

      > span {
        padding-left: 8px;
        font-size: 20px;
      }
    }

    > .amount {
      font-size: 40px;
      font-family: Consolas, monospace;
      color: #306ECC;
      background: none;
      outline: none;
      border: 0;
      text-align: right;
      width: 60%;
      padding-right: 10px;
    }
  }
  > .content {
    height: calc(100% - 80px);
    > .xxx{
      padding: 0 10px;
      flex-grow: 1;
      > .item{
        height: 60px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        padding-top: 12px;
        border-bottom: 1px solid #e3e3e9;
        > .item-wrapper{
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 70px;
          > .icon {
            width: 24px;
            height: 24px;
          }
          > span {
            padding-right: 5px;
            font-size: 18px;
          }
        }
        > .input{
          color: black;
          padding-left: 10px;
          font-size: 20px;
          background: none;
          outline: none;
          border: 0;
        }
      }
    }
    > .footer{
      height: 10%;
      width: 100%;
      background: #fbfbfc;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 10px;
      font-size: 24px;
      position: fixed;
      left: 0;
      bottom: 0;
      > .save{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 50px;
        margin-right: 5px;
        border-radius: 10px;
        background: #FF983B;
        color: white;
      }
      > .delete{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40%;
        height: 50px;
        margin-left: 5px;
        border-radius: 10px;
        background: #FAEEF0;
        color: #D94D68;
      }
    }
  }
`;
const RecordEdit: React.FC = () => {
  return (
    <All>
      <Header>
        <Icon name="left"/>
        <span>编辑支出</span>
      </Header>
      <Main>
        <div className="money">
          <div className="label">
            <Icon name="三餐"/>
            <span>三餐</span>
          </div>
          <span className="amount">98</span>
        </div>
        <div className="content">
          <div className="xxx">
            <div className="item">
              <div className="item-wrapper">
                <Icon name="time"/>
                <span>时间</span>
              </div>
              <div className="input">
                <DatePicker locale={locale} value={dayjs()}/>
              </div>
            </div>
            <div className="item">
              <div className="item-wrapper">
                <Icon name="note"/>
                <span>备注</span>
              </div>
              <input type="text" className="input"/>
            </div>
          </div>
          <div className="footer">
            <div className="save">保存</div>
            <div className="delete">删除</div>
          </div>
        </div>
      </Main>
    </All>
  );
};

export {RecordEdit};