import { addItem } from './calculate.js';
export function createHr() {
  const hr = document.createElement('hr');
  return hr;
}
export const handleKeyPress = (e, person) => {
  if (e.keyCode === 13) {
    addItem(person);
  }
};

export function setup() {
  const addMyItem = document.getElementById('addMyItem');
  const addBrotherItem = document.getElementById('addBrotherItem');

  addMyItem.addEventListener('click', () => addItem('my'));
  addBrotherItem.addEventListener('click', () => addItem('brother'));

  const myItemPrice = document.getElementById('myItemPrice');
  const brotherItemPrice = document.getElementById('brotherItemPrice');

  myItemPrice.addEventListener('keypress', (e) => handleKeyPress(e, 'my'));
  brotherItemPrice.addEventListener('keypress', (e) =>
    handleKeyPress(e, 'brother')
  );
}
