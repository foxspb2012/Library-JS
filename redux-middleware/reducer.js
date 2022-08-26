import {Action} from './action.js';

const updateStore = (state, action) => {
  switch (action.type) {
    case Action.INC_COUNT:
      return state + 1;
    case Action.DEC_COUNT:
      return state - 1;
    case Action.RESTART:
      return 0;
    case Action.ADD_SOME_VALUE:
      return state + action.payload;
    default:
      return state;
  }
};

export {updateStore};
