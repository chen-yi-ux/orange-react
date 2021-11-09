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
  id?: number,
  category: Category,
  amount: number,
  time: Dayjs,
  note: string,
  label: Label
}
const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, [records]);
  const findRecord = (id: number) => records.filter(item => item.id === id)[0];
  const addRecords = (record: RecordItem) => {
    setRecords([...records, record]);
  };
  const updateRecord = (id: number, obj: Partial<RecordItem>) => {
    setRecords(records.map(record => record.id === id ? {...record, ...obj} : record))
  }
  const deleteRecord = (id: number) => {
    setRecords(records.filter(record => record.id !== id))
  }
  return {records, setRecords, addRecords, findRecord, updateRecord, deleteRecord};
};
export {useRecords};