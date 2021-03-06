import React, {useState} from 'react';
import styled from 'styled-components';
import {TitleSection} from './Money/TitleSection';
import {CategorySection} from './Money/CategorySection';
import {AmountSection} from './Money/AmountSection';
import {TimeSection} from './Money/TimeSection';
import {NoteSection} from './Money/NoteSection';
import {LabelSection} from './Money/LabelSection';
import dayjs from 'dayjs';
import {useRecords} from '../hooks/useRecords';
import {createId} from '../lib/createId';


const Header = styled.section`
  height: 110px;
  //position: fixed;
  //left: 0;
  //top: 0;
  width: 100%;
`;
const Main = styled.section`
  height: calc(100% - 110px);
  padding: 0 14px;
  //position: fixed;
  //left: 0;
  top: 110px;
  width: 100%;
`;
const Button = styled.div`
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  //position: fixed;
  //left: 0;
  //bottom: 0;
  width: 100%;

  > button {
    width: 40%;
    height: 80%;
    background: #FF983B;
    color: white;
    font-size: 24px;
    border-radius: 35px;
    border: none;

  }
`;

type Label = {
  name: string,
  svg: string,
  category: '-' | '+'
}
type Category = '-' | '+'

const defaultRecord = {
  id: 0,
  category: '-' as Category,
  amount: 0,
  time: dayjs(),
  note: '',
  label: {name: '', svg: '', category: '-'} as Label
};

function Money() {
  const [record, setRecord] = useState(defaultRecord);
  const onChange = (obj: Partial<typeof record>) => {
    setRecord({
      ...record,
      ...obj
    });
  };
  const {addRecords} = useRecords();
  const Save = () => {
    if (record.amount <= 0) {
      window.alert('金额要大于0哦');
    } else if (record.label.svg === '') {
      window.alert('分类要选哦');
    } else {
      console.log(record.amount);
      record.id = createId();
      addRecords(record);
      setRecord(defaultRecord);
      window.history.back();
    }
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
                      onChange={(label, svg, category) =>
                        onChange({label: {name: label, svg: svg, category: category}})}/>
        <Button>
          <button onClick={Save}>保存</button>
        </Button>
      </Main>
    </div>
  );
}

export {Money};