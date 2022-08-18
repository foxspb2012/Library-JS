const updateHeader = (count) => {
  document.querySelector('#current-value')
    .textContent = count.toString();
};

// Определяем действия
const INC_COUNT = 'INC_COUNT';
const DEC_COUNT = 'DEC_COUNT';
const RESTART = 'RESTART';
const ADD_SOME_VALUE = 'ADD_SOME_VALUE';

// Функция для обновления хранилища
const updateStore = (state, action) => {
  console.log(action);
  switch (action.type) {
    case INC_COUNT:
      return state + 1;
    case DEC_COUNT:
      return state - 1;
    case RESTART:
      return 0;
    case ADD_SOME_VALUE:
      return state + action.payload;
    default:
      return state;
  }
};

const incButton = document.querySelector('#inc-button');
const decButton = document.querySelector('#dec-button');
const addButton = document.querySelector('#inc-by-some-value-button');
const restartButton = document.querySelector('#restart-button');
const input = document.querySelector('input');

const store = window.Redux.createStore(updateStore, 0);

incButton.addEventListener('click', () => {
  store.dispatch({type: INC_COUNT});
  updateHeader(store.getState());
});

decButton.addEventListener('click', () => {
  store.dispatch({type: DEC_COUNT});
  updateHeader(store.getState());
});

restartButton.addEventListener('click', () => {
  store.dispatch({type: RESTART});
  updateHeader(store.getState());
});

addButton.addEventListener('click', () => {
  const value = +input.value;
  store.dispatch({type: ADD_SOME_VALUE, payload: value});
  updateHeader(store.getState());
});
