// src/redux/modules/counter.js

// Action Value
const ADD_NUMBER = "ADD_NUMBER";
const MINUS_NUMBER = "MINUS_NUMBER";

// Action Creator
export const addNumber = (payload) => {
  return {
    type: ADD_NUMBER,
    payload, //Key와 Value가 동일하면 생략가능 (payload: payload,)
  };
};
export const MinusNumber = (payload) => {
  return {
    type: MINUS_NUMBER,
    payload, //Key와 Value가 동일하면 생략가능 (payload: payload,)
  };
};

// Initial State
const initialState = {
  number: 0,
};

// Reducer 기본형태
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER: {
      return {
        number: state.number + action.payload,
      };
    }
    case MINUS_NUMBER: {
      return {
        number: state.number - action.payload,
      };
    }
    default:
      return state;
  }
};

// export default reducer
export default counter;
