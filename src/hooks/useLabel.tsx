import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';
import {useHistory} from 'react-router-dom';

type Label = {
  name: string,
  svg: string,
  category: '-' | '+'
}
export const defaultLabels: Label[] = [
  {name: '三餐', svg: '三餐', category: '-'},
  {name: '衣服', svg: '衣服', category: '-'},
  {name: '宠物', svg: '宠物', category: '-'},
  {name: '医疗', svg: '医疗', category: '-'},
  {name: '零食', svg: '零食', category: '-'},
  {name: '学习', svg: '学习', category: '-'},
  {name: '工资', svg: '工资', category: '+'},
  {name: '利息', svg: '利息', category: '+'},
  {name: '奖金', svg: '奖金', category: '+'},
];

const useLabel = () => {
  const [labels, setLabels] = useState<Label[]>([]);
  const history = useHistory();
  useEffect(() => {
    let localLabels = JSON.parse(window.localStorage.getItem('labels') || '[]');
    if (localLabels.length === 0) {
      localLabels = defaultLabels;
    }
    setLabels(localLabels);
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('labels', JSON.stringify(labels));
  }, [labels]);
  const deleteLabel = (label: Label) => {
    setLabels(labels.filter(item => item.name !== label.name));
    window.alert('已删除');
  };
  const addLabel = (newLabel: Label) => {
    const nameList = labels.map(item => item.name);
    if (newLabel.name === '' || newLabel.svg === '') {
      window.alert('类别名称和图标都要选哦');
    } else if (nameList.indexOf(newLabel.name) > 0) {
      window.alert('该类别已存在哦');
    } else {
      setLabels([...labels, newLabel]);
      history.goBack();
    }
  };
  return {labels, setLabels, deleteLabel, addLabel};
};

export {useLabel};