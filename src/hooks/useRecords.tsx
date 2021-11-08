import {useEffect, useState} from 'react';
import {Dayjs} from 'dayjs';
import {useUpdate} from './useUpdate';

type Label = {
  name: string,
  svg: string,
  category: '-' | '+'
}
type Category = '-' | '+';
export type RecordItem = {
  category: Category,
  amount: number,
  time: Dayjs,
  note: string,
  label: Label
}
export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, [records]);
  const addRecords = (record: RecordItem) => {
    setRecords([...records, record]);
  };

  return {records, setRecords, addRecords};
};