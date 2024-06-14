// Function to add new item to a person's list
import { createHr } from './utils.js';
export function addItem(person) {
  const input = document.getElementById(`${person}ItemPrice`);
  const price = parseFloat(input.value);
  let allTotal = parseFloat(document.getElementById('totalPrice').value);
  let people = parseFloat(document.getElementById('totalPeople').value);

  if (isNaN(price)) {
    alert('Please enter a valid number for the price.');
    return;
  }
  if (isNaN(allTotal)) {
    alert('Please enter a valid number for total price');
    return;
  }
  if (isNaN(people)) {
    alert('Please enter a valid number for total people');
    return;
  }
  const list = document.getElementById(person + 'ItemList');
  const entry = document.createElement('li');
  entry.className = 'my-2';
  entry.appendChild(document.createTextNode('$' + price.toFixed(2)));
  const removeBtn = document.createElement('button');
  removeBtn.textContent = '-';
  removeBtn.className = 'btn btn-outline-light btn-sm ms-3';
  removeBtn.onclick = () => {
    list.removeChild(entry);
    calculateTotals(allTotal, people);
  };
  entry.appendChild(removeBtn);
  list.appendChild(entry);
  calculateTotals(allTotal, people);
  input.value = null;
}

// Function to calculate totals
export function calculateTotals(allTotal, people) {
  const totalsDiv = document.getElementById('totals');
  totalsDiv.removeAttribute('class');

  const myTotal = calculateIndividualTotal('myItemList');
  const brotherTotal = calculateIndividualTotal('brotherItemList');

  const taxRate = 0.06;
  const tipRate = 0.2;

  const myTax = myTotal * taxRate;
  const myTip = (allTotal * tipRate) / people;
  const brotherTax = brotherTotal * taxRate;
  const brotherTip = (allTotal * tipRate) / people;

  document.getElementById('myTotal').textContent =
    'My Total: $' + myTotal.toFixed(2);
  document.getElementById('myTotalTip').textContent =
    `Total + Tip (${myTip.toFixed(2)}): $` + (myTotal + myTip).toFixed(2);
  document.getElementById('myTotalTaxTip').textContent =
    `Total + Tip + Tax ($${myTax.toFixed(2)}): $` +
    (myTotal + myTip + myTax).toFixed(2);
  document.getElementById('myTotalTaxTip').append(createHr());

  document.getElementById('brotherTotal').textContent =
    "Brother's Total: $" + brotherTotal.toFixed(2);
  document.getElementById('brotherTotalTip').textContent =
    `Total + Tip (${brotherTip.toFixed(2)}): $` +
    (brotherTotal + brotherTip).toFixed(2);
  document.getElementById('brotherTotalTaxTip').textContent =
    `Total + Tip + Tax ($${brotherTax.toFixed(2)}): $` +
    (brotherTotal + brotherTip + brotherTax).toFixed(2);
  document.getElementById('brotherTotalTaxTip').append(createHr());

  document.getElementById('grandTotal').textContent =
    'Grand Total: $' +
    (myTotal + brotherTotal + myTax + brotherTax + myTip + brotherTip).toFixed(
      2
    );
}

function calculateIndividualTotal(listId) {
  const items = document.getElementById(listId).getElementsByTagName('li');
  let total = 0;
  Array.from(items).forEach((item) => {
    total += parseFloat(item.firstChild.textContent.replace('$', ''));
  });
  return total;
}
