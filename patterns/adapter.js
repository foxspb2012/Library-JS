/**
 * ПАТТЕРН ADAPTER
 * Паттерн адаптер обеспечивает взаимодействие объектов с различными интерфейсами.
 */

// Подключение необходимых функций
const dayjs = require(`dayjs`);
const getRandomInteger = function (a = 0, b = 1) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

// Первый пример использования
const event = {
  'base_price': 100500,
  'date_from': dayjs().add(getRandomInteger(1, 6), 'hour'),
  'date_to': dayjs().add(getRandomInteger(10, 240), 'minute'),
  'is_favorite': Boolean(getRandomInteger(0, 1)),
};

const adaptToClient = (event) => {
  const adaptedEvent = {
    ...event,
    basePrice: event['base_price'],
    dateFrom: new Date(event['date_from']),
    dateTo: new Date(event['date_to']),
    isFavorite: event['is_favorite'],
  };

  delete adaptedEvent['base_price'];
  delete adaptedEvent['date_from'];
  delete adaptedEvent['date_to'];
  delete adaptedEvent['is_favorite'];

  return adaptedEvent;
};

const adaptToServer = (event) => {
  const adaptedEvent = {
    ...event,
    'base_price': event.basePrice,
    'date_from': event.dateFrom.toISOString(),
    'date_to': event.dateTo.toISOString(),
    'is_favorite': event.isFavorite || false,
  };

  delete adaptedEvent.basePrice;
  delete adaptedEvent.dateFrom;
  delete adaptedEvent.dateTo;
  delete adaptedEvent.isFavorite;

  return adaptedEvent;
};

const adaptedClient = adaptToClient(event);
console.log("Получаем адаптированный для клиента объект:", adaptedClient);

const adaptedServer = adaptToServer(adaptedClient);
console.log("Произведём обратную адаптацию объекта для сервера:", adaptedServer);


// Второй пример реализации

// в состоянии State в поле user хранится информация о пользователе
class State {
  constructor(initialState) {
    this.state = {...initialState};
  }

  update(key, value) {
    this.state = {
      ...this.state,
      [key]: value,
    };
  }

  get(key) {
    return this.state[key];
  }
}

// получим состояние
const state = new State({user: {}});

// новая структура
const user = {
  fullName: {
    name: 'John',
    lastName: 'Doe'
  },
  birthDate: {
    year: 1981
  },
  address: {
    city: 'Berlin',
    street: '1 Hasselhoff Lane'
  }
};

// напишем адаптер
class UserToStateAdapter {
  constructor(state) {
    this.state = state;
  }

  update(serviceUser) {
    const {fullName, birthDate, address} = serviceUser;
    const {name, lastName} = fullName;
    const {year} = birthDate;
    const {city} = address;

    const clientUser = {
      name,
      lastName,
      birthYear: year,
      city,
      address,
    };

    this.state.update("user", clientUser);
  }
}

const userToStateAdapter = new UserToStateAdapter(state);

// используем адаптер
userToStateAdapter.update(user);
console.log("Выведем исходную структуру:", user);
console.log("Выведем изменённую структуру:", state.state.user);
