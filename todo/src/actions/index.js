export const ADD_ITEM = "ADD_ITEM";

export const addItem = item => {
  return {
    type: ADD_ITEM,
    payload: {value: item, completed: false}
  };
};