const logIt = (store) => (nextDispath) => (action) => {
  console.log(`[${Date()}] — выполнено действие`);
  console.log(action);
  console.log('Текущее состояние:');
  console.log(store.getState());

  console.log('Выполняем действие…');
  const result = nextDispath(action);
  console.log(store.getState());

  return result;
};

export {logIt};
