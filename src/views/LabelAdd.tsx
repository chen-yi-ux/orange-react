import {Icon} from 'components/Icon';
import styled from 'styled-components';
import {useState} from 'react';
import { AllLabels } from 'constant/AllLabels';

const Wrapper = styled.div`
  height: 100vh;
`;
const Header = styled.div`
  background: #FF983B;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 10px;
  padding-top: 10px;
  color: white;
  font-size: 22px;

  > .icon {
    width: 30px;
    height: 30px;
    padding-right: 15px;
  }

  > .finish {
    font-size: 16px;
    width: 12%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Main = styled.div`
  height: calc(100% - 60px);
  padding-bottom: 10px;
`;
const Title = styled.div`
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid #e3e3e3;
  font-size: 18px;
  color: black;

  > input {
    background: none;
    outline: none;
    border: 0;
    text-align: right;
  }
`;
const Content = styled.div`
  height: calc(100% - 45px);

  > .iconName {
    color: black;
    font-size: 18px;
    padding: 10px;
  }

  > .icons {
    overflow: auto;
    height: calc(100% - 48px);

    > ul {
      display: flex;
      flex-wrap: wrap;
      overflow: auto;
      margin-bottom: 0;

      > li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25%;

        > .icon-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid #e3e3e3;
          border-radius: 30%;
          height: 71px;
          width: 80%;
          margin: 10px 0;

          > .icon {
            width: 45px;
            height: 45px;
          }

          &.selected {
            background: lavenderblush;

            svg {
              animation: shake 0.3s linear;
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
  }
`;

const LabelAdd = () => {
  const [allLabels] = useState(AllLabels);
  return (
    <Wrapper>
      <Header>
        <Icon name="left-white"/>
        <span className="name">添加支出类别</span>
        <span className="finish">完成</span>
      </Header>
      <Main>
        <Title>
          <span>类别名称</span>
          <input type="text" placeholder="<输入名称>"/>
        </Title>
        <Content>
          <div className="iconName">图标</div>
          <div className="icons">
            <ul>
              {allLabels.map(item =>
                <li>
                  <div className="icon-wrapper">
                    <Icon name={item}/>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </Content>
      </Main>
    </Wrapper>
  );
};

export {LabelAdd};