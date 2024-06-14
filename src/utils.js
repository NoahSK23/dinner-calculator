import { addItem, calculateTotals } from './calculate.js';
export function createHr() {
  const hr = document.createElement('hr');
  return hr;
}

const handleKeyPress = (e, person) => {
  if (e.keyCode === 13) {
    addItem(person);
  }
};

export function setup() {
  const addMyItem = document.getElementById('addMyItem');
  const addBrotherItem = document.getElementById('addBrotherItem');
  const totalPrice = document.getElementById('totalPrice');
  const totalPeople = document.getElementById('totalPeople');

  addMyItem.addEventListener('click', () => addItem('my'));
  addBrotherItem.addEventListener('click', () => addItem('brother'));

  totalPrice.addEventListener('keyup', () => {
    const allTotal = parseFloat(totalPrice.value);
    const people = parseFloat(totalPeople.value);
    if (!isNaN(allTotal) && !isNaN(people)) {
      calculateTotals(allTotal, people);
    }
  });

  totalPeople.addEventListener('keyup', () => {
    const allTotal = parseFloat(totalPrice.value);
    const people = parseFloat(totalPeople.value);
    if (!isNaN(allTotal) && !isNaN(people)) {
      calculateTotals(allTotal, people);
    }
  });

  const myItemPrice = document.getElementById('myItemPrice');
  const brotherItemPrice = document.getElementById('brotherItemPrice');

  myItemPrice.addEventListener('keypress', (e) => handleKeyPress(e, 'my'));
  brotherItemPrice.addEventListener('keypress', (e) =>
    handleKeyPress(e, 'brother')
  );
}
