import React, {useRef} from 'react';
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

type Props = {
  value: number;
  onChange: (newValue: string) => void
}
const AmountSection: React.FC<Props> = (props) => {
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur = () => {
    if(refInput.current !== null){
      props.onChange(refInput.current.value);
    }
  }
  return (
    <Wrapper>
      <input type="number" placeholder="0"
             ref={refInput}
             onBlur={onBlur} />
    </Wrapper>
  );
};

export {AmountSection};