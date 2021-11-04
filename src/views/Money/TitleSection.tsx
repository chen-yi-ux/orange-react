import {Icon} from 'components/Icon';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  padding: 14px 10px;
  text-align: center; 
  > .icon {
    width: 24px;
    height: 24px;
  }
`;
const TitleSection = () => {
  return (
    <Wrapper>
      <Icon name="left"/>
      <span>记一笔</span>
      <Icon name=""/>
    </Wrapper>
  );
};

export {TitleSection};