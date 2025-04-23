import {useState} from "react";

const initialState = {count: 0};

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state, count: state.count + 1
      };
    case "DECREMENT":
      return {
        ...state, count: state.count - 1
      };
    case "RESET":
      return {
        ...state, count: 0
      };
    case "incrementByAmount":
      return {
        ...state, count: state.count + action.payload
      };
    case "decrementByAmount":
      return {
        ...state, count: state.count - action.payload
      };
    default:
      return state;
  }
};
export { counterReducer, initialState };