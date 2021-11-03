import React from 'react';
import styled from 'styled-components';
import {TitleSection} from './Money/TitleSection';
import {CategorySection} from './Money/CategorySection';
import {AmountSection} from './Money/AmountSection';
import {TimeSection} from './Money/TimeSection';
import {NoteSection} from './Money/NoteSection';
import {LabelSection} from './Money/LabelSection';
import {Button} from './Money/Button';


const Header = styled.section`
  //height: 110px;
`;
const Main = styled.section`
  padding: 0 14px;
`;
function Money() {
  return (
    <div>
      <Header>
        <TitleSection/>
        <CategorySection/>
      </Header>
      <Main>
        <AmountSection/>
        <TimeSection/>
        <NoteSection/>
        <LabelSection/>
      </Main>
      <Button/>
    </div>
  );
}

export {Money};