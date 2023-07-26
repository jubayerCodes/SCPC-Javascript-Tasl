// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

const findTwoIndicesWithSum = (numbers, target) => {
  let firstIndex = 0;
  let secondIndex = numbers.length - 1;

  const pairs = [];

  while (firstIndex < secondIndex) {
    const sum = numbers[firstIndex] + numbers[secondIndex];

    if (sum === target) {
      pairs.push([firstIndex, secondIndex]);
      firstIndex++;
      secondIndex--;
    } else if (sum < target) {
      firstIndex++;
    } else {
      secondIndex--;
    }
  }

  if (pairs.length === 1) {
    return pairs[0];
  } else {
    return pairs;
  }
};

const sortedArray = [1, 2, 45, 97, 100];
const targetValue = 100;
const indices = findTwoIndicesWithSum(sortedArray, targetValue);
console.log(indices);
