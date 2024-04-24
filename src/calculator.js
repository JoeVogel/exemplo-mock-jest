const { multiply } = require('./math');

function add(a, b) {
  return a + b;
}

function addWithMultiply(a, b) {
  const multiplyResult = multiply(a, b);
  return add(a, b) + multiplyResult;
}

module.exports = { add, addWithMultiply };