const { add, addWithMultiply } = require('../src/calculator');
const { multiply } = require('../src/math');

jest.mock('../src/math', () => ({
  multiply: jest.fn(),
}));

describe('Calculator', () => {
    
  describe('add', () => {
    test('adds two numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
    });
  });

  describe('addWithMultiply', () => {
    test('adds two numbers and multiplies correctly', () => {
      // Mocking the multiply function
      multiply.mockImplementation((a, b) => a * b);

      // Test the function with mock
      expect(addWithMultiply(2, 3)).toBe(11); // (2 + 3) + (2 * 3) = 5 + 6 = 11
    });
  });
});