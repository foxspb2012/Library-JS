const updateHeader = (count) => {
  document.querySelector('#current-value')
    .textContent = count.toString();
};

export {updateHeader};
