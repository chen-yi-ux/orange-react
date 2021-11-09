import {useState} from 'react';
import dayjs from 'dayjs';

const useMonth = () => {
  const [month, setMonth] = useState(dayjs());
  const getMonth = () => {
    if (month.year() === dayjs().year()) {
      return month.format('M月');
    } else {
      return month.format('YYYY年M月');
    }
  };
  const Before = () => {
    setMonth(month.subtract(1, 'month'));
  };
  const After = () => {
    setMonth(month.add(1, 'month'));
  };
  return {month, setMonth, getMonth, Before, After};
};

export {useMonth};


