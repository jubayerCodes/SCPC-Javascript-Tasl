// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const findSecondSmallest = (numbers) => {
  if (numbers.length < 2) {
    return "Array must contain at least two elements.";
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let num of numbers) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }
  }

  if (secondSmallest === Infinity) {
    return "There is no second smallest element in the array.";
  }

  return secondSmallest;
};

console.log(findSecondSmallest([1, 5, 7, 9, 2]));
