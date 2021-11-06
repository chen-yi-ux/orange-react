import {Icon} from 'components/Icon';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import {useLabel} from 'hooks/useLabel';
import {Link} from 'react-router-dom';

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
    height: 227px; //待定

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

        > div {
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

          > .icon {
            width: 45px;
            height: 45px;
          }
          > a {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            > .icon{
              width: 45px;
              height: 45px;
            }
            > span{
              color: black;
            }
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

type Label = {
  name: string,
  svg: string,
  category: '-' | '+'
}
type Record = {
  category: '-' | '+',
  amount: number,
  time: dayjs.Dayjs,
  note: string,
  label: Label
}
type Props = {
  value: Record;
  onChange: (newValue: string, svg: string, category: '-' | '+') => void;
}
const LabelSection: React.FC<Props> = (props) => {
  const {labels} = useLabel();
  const labelBlock = labels.filter(label => label.category === props.value.category);
  const [selectedLabel, setSelectedLabel] = useState('');
  const [label, setLabel] = useState(labelBlock);
  useEffect(() => {
    setLabel(labelBlock);
  }, [props.value.category, labelBlock]);
  return (
    <Wrapper>
      <div className="title">
        <Icon name="label"/>
        <span>分类</span>
      </div>
      <div className="content">
        <ul>
          {label.map(item =>
            <li key={item.name}>
              <div className={selectedLabel === item.name ? 'selected' : ''}
                   onClick={() => {
                     setSelectedLabel(item.name);
                     props.onChange(item.name, item.svg, item.category);
                   }}>
                <Icon name={item.svg}/>
                <span>{item.name}</span>
              </div>
            </li>
          )}
          <li>
            <div>
              <Link to="/money/edit">
                <Icon name="设置"/>
                <span>设置</span>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export {LabelSection};