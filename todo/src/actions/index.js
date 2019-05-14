export const ADD_ITEM = "ADD_ITEM";
export const MARK_COMPLETE = "MARK_COMPLETE";
export const DELETE_ITEM = "DELETE_ITEM";
export const CLEAR_COMPLETE = "CLEAR_COMPLETE";

export const addItem = item => {
  return {
    type: ADD_ITEM,
    payload: item
  };
};

export const markComplete = id => {
  return {
    type: MARK_COMPLETE,
    payload: id
  };
};

export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    payload: id
  };
};

export const clearComplete = () => {
  return {
    type: CLEAR_COMPLETE
  };
};