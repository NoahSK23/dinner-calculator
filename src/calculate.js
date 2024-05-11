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
    alert('Please enter a vaild number for total price');
    return;
  }
  if (isNaN(people)) {
    alert('Please enter a vaild number for total people');
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
  const myItems = document
    .getElementById('myItemList')
    .getElementsByTagName('li');
  const brotherItems = document
    .getElementById('brotherItemList')
    .getElementsByTagName('li');
  let myTotal = 0,
    brotherTotal = 0;

  Array.from(myItems).forEach((item) => {
    myTotal += parseFloat(item.firstChild.textContent.replace('$', ''));
  });

  Array.from(brotherItems).forEach((item) => {
    brotherTotal += parseFloat(item.firstChild.textContent.replace('$', ''));
  });

  const taxRate = 0.06;
  const tipRate = 0.2;

  const myTax = myTotal * taxRate;
  const myTip = (allTotal * tipRate) / people;
  const brotherTax = brotherTotal * taxRate;
  const brotherTip = (allTotal * tipRate) / people;

  document.getElementById('myTotal').textContent =
    'My Total: $' + myTotal.toFixed(2);
  document.getElementById('myTotalTip').textContent =
    'Total + Tip: $' + (myTotal + myTip).toFixed(2);
  document.getElementById('myTotalTaxTip').textContent =
    `Total + Tax + Tip ($${myTax.toFixed(2)}): $` +
    (myTotal + myTip + myTax).toFixed(2);
  document.getElementById('myTotalTaxTip').append(createHr());

  document.getElementById('brotherTotal').textContent =
    "Brother's Total: $" + brotherTotal.toFixed(2);
  document.getElementById('brotherTotalTip').textContent =
    'Total + Tip: $' + (brotherTotal + brotherTip).toFixed(2);
  document.getElementById('brotherTotalTaxTip').textContent =
    `Total + Tax + Tip ($${brotherTax.toFixed(2)}): $` +
    (brotherTotal + brotherTip + brotherTax).toFixed(2);
  document.getElementById('brotherTotalTaxTip').append(createHr());

  document.getElementById('grandTotal').textContent =
    'Grand Total: $' +
    (myTotal + brotherTotal + myTax + brotherTax + myTip + brotherTip).toFixed(
      2
    );
}
