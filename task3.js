// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

const getMostFrequentElement = (arr) => {
  const elementsCount = {};

  for (const element of arr) {
    elementsCount[element] = (elementsCount[element] || 0) + 1;
  }

  let maxCount = 0;

  for (const element in elementsCount) {
    if (elementsCount[element] > maxCount) {
      maxCount = elementsCount[element];
    }
  }

  const mostFrequentElement = [];

  for (const element in elementsCount) {
    if (elementsCount[element] === maxCount) {
      mostFrequentElement.push(element);
    }
  }

  if (mostFrequentElement.length === 1) {
    return mostFrequentElement[0];
  } else {
    return mostFrequentElement;
  }
};

const mostFrequent = getMostFrequentElement('hossaain');

console.log(mostFrequent);
