import React from 'react';
import {Icon} from 'components/Icon';
import styled from 'styled-components';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import ReactEcharts from 'echarts-for-react';


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

  > .left {
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
`;

type EChartsOption = echarts.EChartOption;
function Chart() {
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
        data:  [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
  return (
    <All>
      <Header>
        <div className="left">
          <Icon name="left-white"/>
        </div>
        <div className="type">
          <span>支出</span>
          <div className="down">
            <Icon name="down"/>
          </div>
        </div>
        <div className="right"></div>
      </Header>
      <Main>
        <div className="time-select">
          <Icon name="Arrow-left"/>
          <span>11月</span>
          <Icon name="Arrow-right"/>
        </div>
        <ReactEcharts option={option} style={{height: '250px'}}/>
        <div className="total">
          <span>总支出</span>
          <span className="number">200元</span>
        </div>
        <hr/>
        <div className="records">
          <ol>
            <li>
              <div className="item">
                <Icon name="三餐"/>
                <span className="item-name">三餐</span>
                <span className="item-per">95%</span>
              </div>
              <span>198</span>
            </li>
          </ol>
        </div>
      </Main>
    </All>
  );
}

export {Chart};