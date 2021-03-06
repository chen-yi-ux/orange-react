import {Icon} from 'components/Icon';
import React from 'react';
import styled from 'styled-components';
import {DatePicker} from 'components';
import dayjs, {Dayjs} from 'dayjs';
import locale from 'antd/es/date-picker/locale/zh_CN';

const Wrapper = styled.section`
  height: 60px;
  font-size: 18px;
  padding: 13px 0;
  border-bottom: 1px solid #e3e3e3;
  display: flex;
  align-items: center;

  > span {
    padding-left: 5px;
    padding-right: 18px;
    color: #636363;
  }
`;

type Props = {
  value: dayjs.Dayjs;
  onChange: (newValue: dayjs.Dayjs) => void
}
const TimeSection: React.FC<Props> = (props) => {
  const onChange = (e: Dayjs | null) => {
    if (e !== null) {
      props.onChange(e);
    }
  };
  return (
    <Wrapper>
      <Icon name="time"/>
      <span>时间</span>
      <DatePicker locale={locale}
                  value={props.value}
                  onChange={onChange}/>
    </Wrapper>
  );
};

export {TimeSection};