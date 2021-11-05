import {Icon} from 'components/Icon';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
`;
const Header = styled.div`
  height: 110px;
  background: #FF983B;
  padding-top: 15px;
  padding-left: 10px;
  padding-right: 10px;

  > .icon {
    width: 24px;
    height: 24px;
  }

  > ul {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;

    > li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30%;
      font-size: 20px;
      height: 2.2em;
      border: 1px solid black;

      &.income {
        border-radius: 15px 0 0 15px;
      }

      &.expenses {
        border-radius: 0 15px 15px 0;
      }

      &.selected {
        background: white;
        color: #FF983B;
        border: 1px solid white;
      }
    }
  }
`;
const Main = styled.div`
  height: calc(100% - 185px);
  overflow: auto;
  > ul {
    overflow: auto;
    > li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 45px;
      padding: 0 15px;
      border-bottom: 1px solid #e3e3e3;
      > .content{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        > .icon{
          margin-right: 8px;
          width: 30px;
          height: 30px;
        }
      }
      > .icon{
        margin-top: 8px;
        width: 20px;
        height: 20px;
      }
    }
  }
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  font-size: 18px;
  box-shadow: 0 0 3px rgba(0,0,0,0.2);
  height: 75px;
  > .icon{
    width: 23px;
    height: 23px;
  }
`
const LabelEdit = () => {
  return (
    <Wrapper>
      <Header>
        <Icon name="left-white"/>
        <ul>
          <li className="income">收入</li>
          <li className="expenses selected">支出</li>
        </ul>
      </Header>
      <Main>
        <ul>
          <li>
            <div className="content">
              <Icon name="三餐"/>
              <span>三餐</span>
            </div>
            <Icon name="delete"/>
          </li>
          <li>
            <div className="content">
              <Icon name="三餐"/>
              <span>三餐</span>
            </div>
            <Icon name="delete"/>
          </li>
          <li>
            <div className="content">
              <Icon name="三餐"/>
              <span>三餐</span>
            </div>
            <Icon name="delete"/>
          </li>
          <li>
            <div className="content">
              <Icon name="三餐"/>
              <span>三餐</span>
            </div>
            <Icon name="delete"/>
          </li>
          <li>
            <div className="content">
              <Icon name="三餐"/>
              <span>三餐</span>
            </div>
            <Icon name="delete"/>
          </li>
          <li>
            <div className="content">
              <Icon name="三餐"/>
              <span>三餐</span>
            </div>
            <Icon name="delete"/>
          </li>
          <li>
            <div className="content">
              <Icon name="三餐"/>
              <span>三餐</span>
            </div>
            <Icon name="delete"/>
          </li>
          <li>
            <div className="content">
              <Icon name="三餐"/>
              <span>三餐</span>
            </div>
            <Icon name="delete"/>
          </li>
          <li>
            <div className="content">
              <Icon name="三餐"/>
              <span>三餐</span>
            </div>
            <Icon name="delete"/>
          </li>
          <li>
            <div className="content">
              <Icon name="三餐"/>
              <span>三餐</span>
            </div>
            <Icon name="delete"/>
          </li>
          <li>
            <div className="content">
              <Icon name="三餐"/>
              <span>三餐</span>
            </div>
            <Icon name="delete"/>
          </li>
          <li>
            <div className="content">
              <Icon name="三餐"/>
              <span>三餐</span>
            </div>
            <Icon name="delete"/>
          </li>
        </ul>
      </Main>
      <Button>
        <Icon name="add"/>
        <span>添加类别</span>
      </Button>
    </Wrapper>
  );
};

export {LabelEdit};