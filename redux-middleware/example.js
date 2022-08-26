import {updateStore} from './reducer.js';
import {updateHeader} from './utils.js';
import {
  incCountAction,
  decCountAction,
  restartAction,
  addSomeValueAction
} from './action.js';
import {logIt} from './middleware.js';

const incButton = document.querySelector('#inc-button');
const decButton = document.querySelector('#dec-button');
const addButton = document.querySelector('#inc-by-some-value-button');
const restartButton = document.querySelector('#restart-button');
const input = document.querySelector('input');

const applyMiddleware = window.Redux.applyMiddleware;

const store = window.Redux.createStore(
  updateStore,
  0,
  applyMiddleware(logIt),
);

incButton.addEventListener('click', () => {
  store.dispatch(incCountAction());
  updateHeader(store.getState());
});

decButton.addEventListener('click', () => {
  store.dispatch(decCountAction());
  updateHeader(store.getState());
});

restartButton.addEventListener('click', () => {
  store.dispatch(restartAction());
  updateHeader(store.getState());
});

addButton.addEventListener('click', () => {
  const value = +input.value;
  store.dispatch(addSomeValueAction(value));
  updateHeader(store.getState());
});

export {incButton, decButton, restartButton, addButton, input};
