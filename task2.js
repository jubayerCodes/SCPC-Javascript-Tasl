// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

const sumOfPositiveNumbers = (numbers) => {
  const positiveNumbers = numbers.filter((num) => num > 0);

  const sum = positiveNumbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );

  return sum;
};

const sum = sumOfPositiveNumbers([5, 2, 5, 8, -3, -4, -5]);

console.log(sum);
