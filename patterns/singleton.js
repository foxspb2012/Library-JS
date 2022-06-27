/**
 * ПАТТЕРН SINGLETON
 * Паттерн Одиночка гарантирует, что класс имеет только один экземпляр, и предоставляет глобальную точку доступа к этому экземпляру.
 */

class Username {
  #username = null;

  constructor(username) {
    this.#username = username;
  }

  set username(value) {
    this.#username = value;
  }

  get username() {
    return this.#username;
  }
}

const Singleton = (function () {
  let instance;

  function createInstance() {
    let classObj = new Username();
    return classObj;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const instanceOne = Singleton.getInstance();
instanceOne.username = "Jack";

const instanceTwo = Singleton.getInstance();
console.log("Second Instance: ", instanceTwo.username);

console.log("Are both instance equal? ", instanceOne === instanceTwo);

