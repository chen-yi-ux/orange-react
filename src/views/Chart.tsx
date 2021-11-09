import React, {useState} from 'react';
import {Icon} from 'components/Icon';
import styled from 'styled-components';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import ReactEcharts from 'echarts-for-react';
import {Link} from 'react-router-dom';
import {useRecords} from 'hooks/useRecords';
import {useMonth} from '../hooks/useMonth';
import dayjs from 'dayjs';
import { getOption } from 'lib/getOption';
import {Blank} from '../components/Blank';

const All = styled.div`
  height: 100vh;
`;
const Header = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  color: white;
  background: #FF983B;

  > a {
    padding-left: 10px;
    width: 32px;
    height: 32px;

    > .icon {
      width: 24px;
      height: 24px;
    }
  }

  > .type {
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;

    > .down {
      margin-top: 6px;
      margin-left: 6px;
      display: flex;
      justify-content: center;
      align-content: center;

      > .icon {
        width: 28px;
        height: 28px;
      }
    }
  }

  > .right {
    width: 32px;
    height: 32px;
  }
`;
const Main = styled.div`
  height: calc(100% - 70px);
  width: 100%;

  > .time-select {
    height: 60px;
    padding: 20px;
    flex-wrap: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;

    > span {
      font-size: 26px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #915931;
      width: 180px;
    }

    > .icon {
      width: 30px;
      height: 30px;
    }
  }
  
  > .circle{
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: 250px;
    > .icon{
      width: 200px;
      height: 200px;
    }
  }
  
  > .total {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #144a74;
    font-size: 22px;
    padding: 0 10px;
    padding-bottom: 5px;
    height: 38px;

    > .number {
      padding-left: 10px;
    }
  }

  > .records {
    height: calc(100% - 350px);
    overflow: auto;
    box-shadow: 3px 0 5px #e3e3e3;

    > ol > li {
      border-bottom: 1px solid #e3e3e3;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: nowrap;
      height: 50px;
      padding: 0 5px;
      font-size: 18px;

      > .item {
        display: flex;
        align-items: center;
        justify-content: center;

        > .icon {
          width: 30px;
          height: 30px;
        }

        > .item-name {
          padding-left: 5px;
          color: black;
        }

        > .item-per {
          padding-left: 10px;
          color: #6e6e6e;
        }
      }

      > .item-amount {
        color: black;
      }
    }
  }
  
  > .blank{
    margin-top: 5vh;
  }
`;

type EChartsOption = echarts.EChartOption;

function Chart() {
  const [type, setType] = useState<('-' | '+')>('-');
  const categoryMap = {'-': '支出', '+': '收入'};
  const changeCategory = () => {
    console.log('hhh');
    if (type === '-') {
      setType('+');
    } else {
      setType('-');
    }
  };
  const {month, getMonth, Before, After} = useMonth();
  const {records} = useRecords();
  const recordSelect = records.filter(record => dayjs(record.time).month() === month.month() && record.category === type);
  const chartRecord = getOption(recordSelect);
  const Total = () => {
    let total = 0;
    chartRecord.forEach(r => total += r.value);
    return total;
  }
  const option: EChartsOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    color: ['#ea635c', '#ffbd99', '#f5c05f', '#89acf7', '#c2db63', '#83d995', '#DEECFC'],
    series: [
      {
        name: '',
        type: 'pie',
        radius: '60%',
        center: ['50%', '40%'],
        itemStyle: {
          borderRadius: 8,
          borderColor: '#fff',
          borderWidth: 1
        },
        data: chartRecord,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  const Content = (chartRecord: {name: string, value: number, svg: string, per: number}[]) => {
    return (
      <div className="records">
        <ol>
          {chartRecord.map(r =>
            <li key={r.name}>
              <div className="item">
                <Icon name={r.svg}/>
                <span className="item-name">{r.name}</span>
                <span className="item-per">{r.per}%</span>
              </div>
              <span>{r.value}</span>
            </li>
          )}
        </ol>
      </div>
    )
  }
  return (
    <All>
      <Header>
        <Link to="/detail">
          <Icon name="left-white"/>
        </Link>
        <div className="type">
          <span>{categoryMap[type]}</span>
          <div className="down" onClick={changeCategory}>
            <Icon name="down"/>
          </div>
        </div>
        <div className="right"></div>
      </Header>
      <Main>
        <div className="time-select">
          <Icon name="Arrow-left" onClick={Before}/>
          <span>{getMonth()}</span>
          <Icon name="Arrow-right" onClick={After}/>
        </div>
        {chartRecord !== [] ? <ReactEcharts option={option} style={{height: '250px'}}/> : <div className="circle"><Icon name="circle"/></div> }
        <div className="total">
          <span>总{categoryMap[type]}</span>
          <span className="number">{Total()}元</span>
        </div>
        <hr/>
        {chartRecord !== [] ? Content(chartRecord) : <div className="blank"><Blank/></div>}
      </Main>
    </All>
  );
}

export {Chart};