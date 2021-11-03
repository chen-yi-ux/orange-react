import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;

  > button {
    width: 35%;
    height: 80%;
    background: #FF983B;
    color: white;
    font-size: 24px;
    border-radius: 35px;
    border: none;
  }
`;
const Button = () => {
  return (
    <Wrapper>
      <button>保存</button>
    </Wrapper>
  );
};

export {Button};