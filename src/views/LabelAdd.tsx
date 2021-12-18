import {Icon} from 'components/Icon';
import styled from 'styled-components';
import {useRef, useState} from 'react';
import {AllLabels} from 'constant/AllLabels';
import {Link, useParams} from 'react-router-dom';
import {useLabel} from 'hooks/useLabel';
import classnames from 'classnames';

const Wrapper = styled.div`
  height: 100vh;
`;
const Header = styled.div`
  background: #FF983B;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: 60px;
  padding: 0 10px;
  padding-top: 10px;
  color: white;
  font-size: 22px;

  > a {
    display: flex;
    justify-content: center;
    align-items: center;

    > .icon {
      width: 30px;
      height: 30px;
      padding-right: 15px;
    }
  }

  > .finish {
    width: 12%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: white;
    cursor: default;
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
type Label = {
  name: string,
  svg: string,
  category: '-' | '+'
}
type Params = {
  type: '-' | '+'
}
const LabelAdd = () => {
  const refInput = useRef<HTMLInputElement>(null);
  const [allLabels] = useState(AllLabels);
  const {addLabel} = useLabel();
  const [select, setSelect] = useState('');
  const [newLabel, setNewLabel] = useState<Label>({name: '', svg: '', category: '-'});
  let {type} = useParams<Params>();
  const categoryMap = {'-': '支出', '+': '收入'};
  const onBlur = () => {
    if (refInput.current !== null) {
      setNewLabel({...newLabel, name: refInput.current.value, category: type});
    }
  };
  const onAddLabel = () => {
    addLabel(newLabel);
  };
  return (
    <Wrapper>
      <Header>
        <Link to={'/money/edit'}>
          <Icon name="left-white"/>
        </Link>
        <span className="name">添加{categoryMap[type]}类别</span>
        <span className="finish"
              onClick={onAddLabel}
        >完成</span>
      </Header>
      <Main>
        <Title>
          <span>类别名称</span>
          <input type="text" placeholder="<输入名称>"
                 ref={refInput}
                 onBlur={onBlur}
          />
        </Title>
        <Content>
          <div className="iconName">图标</div>
          <div className="icons">
            <ul>
              {allLabels.map(item =>
                <li key={item}>
                  <div className={classnames('icon-wrapper', select === item ? 'selected' : '')}
                       onClick={() => {
                         setSelect(item);
                         setNewLabel({...newLabel, svg: item});
                       }}>
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