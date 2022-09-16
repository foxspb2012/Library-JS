class PubSub {
  constructor () {
    this._listeners = {};
  }

  addListener(event, fn) {
    if (! this._listeners[event]) {
      this._listeners[event] = [];
    }

    this._listeners[event].push(fn);
  }

  removeListener(event, fn) {
    if (! this._listeners[event]) {
      return;
    }

    this._listeners[event] = this._listeners[event]
      .filter((listener) => listener === fn);
  }

  emit(event, data) {
    if (! this._listeners[event]) {
      return;
    }

    this._listeners[event]
      .forEach((listener) => listener(data));
  }
}

///////////////////////////////////////////////////
/// Далее пример использования данного паттерна ///
///////////////////////////////////////////////////

const TIME_INTERVAL = 1000;
const DEFAULT_STEP = -1;
const PIZZA_STATUSES = [
  'orderAccept',
  'prepareDough',
  'prepareToping',
  'bakingPizza',
  'done',
];

class Pizza extends PubSub {
  constructor(name) {
    super();
    this._name = name;
    this._step = DEFAULT_STEP;
    this._cook = this._cook.bind(this);
    this._timerId = null;
  }

  start() {
    this._reset();
    this._timerId = setInterval(this._cook, TIME_INTERVAL);
  }

  _reset() {
    this._step = DEFAULT_STEP;
    clearInterval(this._timerId);
  }

  _cook() {
    this._step++;

    const currentStep = PIZZA_STATUSES[this._step];
    this.emit(currentStep, `Статус пиццы «${this._name}»: ${currentStep}`);

    if (this._step === PIZZA_STATUSES.length - 1) {
      this._reset();
    }
  }
}

const myPizza = new Pizza('Четыре сезона');

myPizza.addListener('orderAccept', (data) => console.log(data));
myPizza.addListener('bakingPizza', (data) => console.log(data));
myPizza.addListener('prepareToping', (data) => console.log(data));
myPizza.addListener('done', (data) => console.log(data));

myPizza.start();

