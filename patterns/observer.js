/**
 * ПАТТЕРН OBSERVER
 * Паттерн наблюдатель реализует связь один ко многим. То есть сколь угодно сущностей могут подписаться
 * на уведомления (наблюдать), и Observer будет их уведомлять..
 */

const showMessage = (message) => {
  console.log(message);
};

const makeToast = (message) => () => showMessage(message);

const Observable = {
  _observers: [],

  add(callback) {
    this._observers.push(callback);
  },

  remove(callback) {
    this._observers = this._observers
      .filter(
        (callbackInStock) => callbackInStock !== callback,
      );
  },

  notify() {
    this._observers.forEach((callback) => callback());
  },
};

const toastForNewEmail = makeToast('Вам пришло письмо!');
const toastForNewChatMessage = makeToast('Новое сообщение в чате');

Observable.add(toastForNewEmail);
Observable.add(toastForNewChatMessage);

Observable.remove(toastForNewEmail);

const toastVeryNewChatMessage = makeToast('Добавим ещё одно новое сообщение в чате');
Observable.add(toastVeryNewChatMessage);


Observable.notify()
