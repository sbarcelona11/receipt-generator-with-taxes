import input1 from './inputs/input1.js';
import input2 from './inputs/input2.js';
import input3 from './inputs/input3.js';
import Receipt from './src/receipt.js';

const receipt = new Receipt();

const { products } = input1;
const { products: products2 } = input2;
const { products: products3 } = input3;

// generate receipt for each input
const output1 = receipt.generate(products);
receipt.resetTaxes();
console.log(output1, '\n');
const output2 = receipt.generate(products2);
receipt.resetTaxes();
console.log(output2, '\n');
const output3 = receipt.generate(products3);
receipt.resetTaxes();
console.log(output3, '\n');
