import { addItem, calculateTotals } from './calculate.js';
export function createHr() {
  const hr = document.createElement('hr');
  return hr;
}

export function setup() {
  const myForm = document.getElementById('myItemForm');
  const brotherForm = document.getElementById('brotherItemForm');

  myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addItem('my');
  });

  brotherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addItem('brother');
  });

  const totalPrice = document.getElementById('totalPrice');
  const totalPeople = document.getElementById('totalPeople');

  totalPrice.addEventListener('keyup', handleKeyUp);
  totalPeople.addEventListener('keyup', handleKeyUp);

  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', () => changeTheme());
}

function handleKeyUp() {
  const totalPrice = parseFloat(document.getElementById('totalPrice').value);
  const totalPeople = parseFloat(document.getElementById('totalPeople').value);

  if (!isNaN(totalPrice) && !isNaN(totalPeople)) {
    calculateTotals(totalPrice, totalPeople);
  }
}

export function changeTheme() {
  const theme = document.body.getAttribute('data-bs-theme');
  const buttons = document.querySelectorAll('.btn');

  if (theme === 'dark') {
    document.body.setAttribute('data-bs-theme', 'light');
    buttons.forEach((button) => {
      button.classList.replace('btn-outline-light', 'btn-outline-secondary');
    });
  } else {
    document.body.setAttribute('data-bs-theme', 'dark');
    buttons.forEach((button) => {
      button.classList.replace('btn-outline-secondary', 'btn-outline-light');
    });
  }
}
