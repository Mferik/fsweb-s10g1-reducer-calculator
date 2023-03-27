import {
  ADD_ONE,
  ADD_DIGIT,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  MEMORY_CLEAR,
  MEMORY_PLUS,
  MEMORY_RECALL,
} from "./../actions";

export const initialState = {
  total: 0,
  operation: "+",
  memory: 0,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
    default:
      return;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        total: state.total + 1,
      };

    case ADD_DIGIT:
      return {
        ...state,
        total: state.total * 10 + action.payload,
      };

    case APPLY_NUMBER:
      return {
        ...state,
        total: calculateResult(state.total, action.payload, state.operation),
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        
        operation: action.payload,
      };

    case CLEAR_DISPLAY:
      return {
        ...state,
        total: initialState.total,
      };

    case MEMORY_PLUS:
      return {
        ...state,
        memory: state.total,
      };

    case MEMORY_RECALL:
      return {
        ...state,
        total: calculateResult(state.memory, state.total, "+"),
      };

    case MEMORY_CLEAR:
      return {
        ...state,
        memory:0,
      };

    default:
      return state;
  }
};

export default reducer;
