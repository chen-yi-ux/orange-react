import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  height: 90px;
  padding-left: 4px;
  padding-top: 18px;
  border-bottom: 1px solid #306ECC;

  > input {
    width: 100%;
    font-size: 48px;
    font-family: Consolas, monospace;
    color: #306ECC;
    background: none;
    outline: none;
    border: none;
  }
`;
const AmountSection = () => {
  return (
    <Wrapper>
      <input type="text" placeholder="0"/>
    </Wrapper>
  );
};

export {AmountSection};