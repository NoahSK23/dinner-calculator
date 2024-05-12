import { addItem } from './src/calculate.js';
import { handleKeyPress } from './src/utils.js';
import 'bootstrap/dist/css/bootstrap.min.css';

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
