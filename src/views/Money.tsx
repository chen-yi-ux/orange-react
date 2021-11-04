import React, {useState} from 'react';
import styled from 'styled-components';
import {TitleSection} from './Money/TitleSection';
import {CategorySection} from './Money/CategorySection';
import {AmountSection} from './Money/AmountSection';
import {TimeSection} from './Money/TimeSection';
import {NoteSection} from './Money/NoteSection';
import {LabelSection} from './Money/LabelSection';
import {Button} from './Money/Button';
import dayjs from 'dayjs';
// import dayjs from 'dayjs';


const Header = styled.section`
  height: 110px;
`;
const Main = styled.section`
  height: calc(100% - 110px);
  padding: 0 14px;
`;

type Label = {
  name: string,
  category: '-' | '+'
}
type Category = '-' | '+'

function Money() {
  const [record, setRecord] = useState({
    category: '-' as Category,
    amount: 0,
    time: dayjs(),
    note: '',
    label: {name: '', category: '-'} as Label
  });
  const onChange = (obj: Partial<typeof record>) => {
    setRecord({
      ...record,
      ...obj
    });
  };
  return (
    <div className="mmm">
      <Header>
        <TitleSection/>
        <CategorySection value={record.category}
                         onChange={(category) => onChange({category})}/>
      </Header>
      <Main>
        <AmountSection value={record.amount}
                       onChange={(amount) => onChange({amount: parseFloat(amount)})}/>
        <TimeSection value={record.time}
                     onChange={(time) => onChange({time})}/>
        <NoteSection value={record.note}
                     onChange={(note) => onChange({note})}/>
        <LabelSection value={record}
                      onChange={(label, category) =>
                        onChange({label: {name: label, category: category}})}/>
        <Button/>
      </Main>
    </div>
  );
}

export {Money};