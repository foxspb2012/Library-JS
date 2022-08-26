const Action = {
  INC_COUNT: 'INC_COUNT',
  DEC_COUNT: 'DEC_COUNT',
  RESTART: 'RESTART',
  ADD_SOME_VALUE: 'ADD_SOME_VALUE',
};

const incCountAction = () => ({
  type: Action.INC_COUNT,
});

const decCountAction = () => ({
  type: Action.DEC_COUNT,
});

const restartAction = () => ({
  type: Action.RESTART,
});

const addSomeValueAction = (value) => ({
  type: Action.ADD_SOME_VALUE,
  payload: value,
});

export {Action, incCountAction, decCountAction, restartAction, addSomeValueAction};

