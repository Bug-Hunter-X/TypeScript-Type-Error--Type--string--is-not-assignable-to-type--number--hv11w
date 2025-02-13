function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: any, b: any): number {
  const numA = typeof a === 'number' ? a : parseFloat(a);
  const numB = typeof b === 'number' ? b : parseFloat(b);
  if (isNaN(numA) || isNaN(numB)) {
    throw new Error('Invalid input: both arguments must be numbers or parsable to numbers.');
  }
  return numA + numB;
}

const result = add(1, 2); // Correct usage
const result2 = addSafe(1, '2'); // Safe usage, parses string to number
const result3 = addSafe('1.5', '2.5'); //Also works
//const result4 = addSafe('abc', 2); //Throws error, because 'abc' cannot be parsed to number.