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
`;
const TimeSection = () => {
  return (
    <Wrapper>
      <Icon name="time"/>
      <span>时间</span>
    </Wrapper>
  );
};

export {TimeSection};