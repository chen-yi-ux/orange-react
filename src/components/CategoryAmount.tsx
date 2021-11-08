import {RecordItem} from 'hooks/useRecords';

export const CategoryAmount = (records: RecordItem[], category: '-'|'+') => {
  let num = 0;
  records.forEach(r => {
    if(r.category === category){
      num += r.amount
    }
  })
  return num;
}