import {Icon} from 'components/Icon';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  height: 60px;
  font-size: 18px;
  padding: 13px 0;
  border-bottom: 1px solid #e3e3e3;
  display: flex;
  align-items: center;

  > span {
    padding-left: 5px;
    padding-right: 18px;
    color: #636363;
  }

  > input {
    background: none;
    outline: none;
    border: 0;
    color: black;
    font-size: 20px;
  }
`;

type Props = {
  value: string;
  onChange: (newValue: string) => void
}
const NoteSection: React.FC<Props> = (props) => {
  return (
    <Wrapper>
      <Icon name="note"/>
      <span>备注</span>
      <input type="text" placeholder="..."
             value={props.value}
             onChange={(e) => {props.onChange(e.target.value)}}/>
    </Wrapper>
  );
};

export {NoteSection};