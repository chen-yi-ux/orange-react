import {RecordItem} from 'hooks/useRecords';

export const getOption = (recordSelect: RecordItem[]) => {
  let total: number = 0;
  if (recordSelect.length === 0) {return [];}
  let chartRecord = [{
    name: recordSelect[0].label.name,
    value: recordSelect[0].amount,
    svg: recordSelect[0].label.svg,
    per: 0
  }];
  total += chartRecord[0].value;
  let flag: boolean = false;
  for (let i = 1; i < recordSelect.length; i++) {
    flag = false;
    total += recordSelect[i].amount;
    for (let j = 0; j < chartRecord.length; j++) {
      if (recordSelect[i].label.name === chartRecord[j].name) {
        chartRecord[j].value += recordSelect[i].amount;
        flag = true;
      }
    }
    if (!flag) {
      chartRecord.push({
        name: recordSelect[i].label.name,
        value: recordSelect[i].amount,
        svg: recordSelect[i].label.svg,
        per: 0
      });
    }
  }
  for (let i = 0; i < chartRecord.length; i++) {
    chartRecord[i].per = parseFloat((chartRecord[i].value * 100 / total).toFixed(2));
    chartRecord[i].value = parseFloat(chartRecord[i].value.toFixed(2));
  }
  chartRecord = chartRecord.sort((a, b) => b.per - a.per);
  return chartRecord;
};