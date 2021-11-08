let id: number = parseInt(window.localStorage.getItem('id') || '0') || 0;

const createId = () => {
  id++;
  window.localStorage.setItem('id', id.toString());
  return id;
};

export {createId};