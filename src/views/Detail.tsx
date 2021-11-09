import {Layout} from 'components/Layout';
import React, {useState} from 'react';
import {Icon} from 'components/Icon';
import styled from 'styled-components';
import {DatePicker} from 'components';
import dayjs from 'dayjs';
import locale from 'antd/es/date-picker/locale/zh_CN';
import {RecordItem, useRecords} from 'hooks/useRecords';
import {CategoryAmount} from 'components/CategoryAmount';
import {Link} from 'react-router-dom';
import { Blank } from 'components/Blank';

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
  > .group{
    > .main-wrapper {
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

      > a > .item2 {
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
  
  > .blank{
  margin-top: 22vh;
  }
`;

function Detail() {
  const [month, setMonth] = useState(dayjs());
  const {records} = useRecords();
  const classRecords = records.filter(item => dayjs(item.time).month() === month.month());
  const hash: { [key: string]: RecordItem[] } = {};
  classRecords.forEach(r => {
    const key = dayjs(r.time).format('YYYY年MM月DD日');
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });
  const orderHash = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) {
      return 0;
    } else if (a[0] > b[0]) {
      return -1;
    } else if (a[0] < b[0]) {
      return 1;
    }
    return 0;
  });
  const itemAmount = (item: RecordItem) => {
    if (item.category === '-') {
      return ('-' + item.amount);
    } else {
      return ('+' + item.amount);
    }
  };
  const groupAmount = (record: RecordItem[]) => {
    let num = 0;
    record.forEach(r => {
      if (r.category === '-') {
        num = num - r.amount;
      } else if (r.category === '+') {
        num = num + r.amount;
      }
    });
    if (num < 0) {
      return num;
    } else {
      return ('+' + num);
    }
  };
  const Content = () => {
    return (
      <div className="group">
        {orderHash.map(([date, record]) =>
          <div className="main-wrapper" key={date}>
            <div className="item1">
              <span>{date}</span>
              <span>{groupAmount(record)}</span>
            </div>
            {record.map(r =>
              <Link to={`/detail/edit/${r.id}`} key={r.id}>
                <div className="item2">
                  <div className="name">
                    <Icon name={r.label.svg}/>
                    <span>{r.label.name}</span>
                  </div>
                  <div className="amount">
                    {itemAmount(r)}
                  </div>
                </div>
              </Link>
            )}
          </div>
        )}
      </div>
    )
  }
  return (
    <Layout>
      <Header>
        <div className="main">
          <Icon name="orange"/>
          <span>橙子记账本</span>
        </div>
        <div className="main-wrapper">
          <div className="time">
            <DatePicker picker="month" locale={locale} value={month}
                        onChange={(e) => {
                          if (e !== null) {
                            setMonth(e);
                          }
                        }}/>
          </div>
          <div className="money">
            <div className="income">
              <span className="income-content">收入</span>
              <span className="income-amount">{CategoryAmount(classRecords, '+')}</span>
            </div>
            <div className="expenses">
              <span className="expenses-content">支出</span>
              <span className="expenses-amount">{CategoryAmount(classRecords, '-')}</span>
            </div>
          </div>
        </div>
      </Header>
      <Main>
        {orderHash !== [] ? Content() : <div className="blank"><Blank/></div>}
      </Main>
    </Layout>
  );
}

export {Detail};