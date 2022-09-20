// Эта функция расширяет функциональность
// другой функции
function checkNumberParams(fn) {
  return (...params) => {

    const validNumberArguments = params.filter(
      (fnArgument) => !Number.isInteger(fnArgument)
    );

    if (validNumberArguments.length > 0) {
      throw new Error('Arguments must be an integer');
    }

    return fn(...params);
  };
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

// Декорируем функцию add
const proAdd = checkNumberParams(add);
console.log(proAdd(2, 2)); // 4, всё OK.
// console.log(proAdd(2, '2')); // Error “Arguments must be an integer”

// Декорируем другую функцию
const proMultiply = checkNumberParams(multiply);
console.log(proMultiply(3, 3)); // 9, всё OK
// console.log(proMultiply(2, '2')); // Error “Arguments must be an integer”


// Ещё один пример декоратора
function logArguments(fn) {
  return (...params) => {
    console.log('LOG: ', params);
    return fn(...params);
  };
}

function checkNumberParams2(fn) {
  return (...params) => {
    const validNumberArguments = params.filter(
      (fnArgument) => !Number.isInteger(fnArgument)
    );

    if (validNumberArguments.length > 0) {
      throw new Error('Arguments must be an integer');
    }

    return fn(...params);
  };
}

function add2(a, b) {
  return a + b;
}

const proAdd2 = checkNumberParams2(logArguments(add2));
console.log(proAdd2(1, 2)); // 3 + информация логирование
// console.log(proAdd2(1, '2')); // Exception “Arguments must be an integer”

// Аргументом функция получает объект и модифицирует его. В нашем случае добавляет новое свойство.
function setStatus(man) {
  if (man.age >= 18) {
    man.status = 'adultHood';
  } else {
    man.status = 'youth';
  }

  return man;
}

function getMan(age) {
  return { age };
}

const user = setStatus(getMan(18));
console.log(user);

// TypeScript позволяет применять декораторы для классов, свойств, методов и параметров методов.
/*
  // Декоратор для класса
  @SomeClassDecorator
  class ExtraMath {

    // Декоратор для метода
    @IsInteger
    public add(a, b) {
      return a + b;
    }

    // Декоратор для свойства
    @SomePropDecorator
    public prop: string = '';

    // Декоратор для параметра
    public multiply(@SomeParamDecorator a, b) {
      return a * b;
    }
  }
*/
