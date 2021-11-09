import {Icon} from 'components/Icon';
import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #8a96a3;

  > .empty {
    width: 80px;
    height: 80px;

    > .icon {
      width: 70px;
      height: 70px;
    }
  }
`;
const Blank: React.FC = () => {
  return (
    <Wrapper>
      <div className="empty">
        <Icon name="empty"/>
      </div>
      <span>什么都没有哦，快去记一笔吧</span>
    </Wrapper>
  );
};

export {Blank};