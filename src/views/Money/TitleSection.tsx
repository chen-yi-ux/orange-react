import {Icon} from 'components/Icon';
import React from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

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
  const history = useHistory();
  const onClickBack = () => {
    history.goBack();
  };
  return (
    <Wrapper>
      <Icon name="left" onClick={onClickBack}/>
      <span>记一笔</span>
      <Icon name=""/>
    </Wrapper>
  );
};

export {TitleSection};