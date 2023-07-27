// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

const romanToInteger = (romanNumber) => {

  const romanNumerals = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
  };

  let result = 0;
  let prevValue = 0;

  for (let i = romanNumber.length - 1; i >= 0; i--) {
    const currentChar = romanNumber[i].toLowerCase();
    const currentValue = romanNumerals[currentChar];

    if (currentValue < prevValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }

    prevValue = currentValue;
  }

  return result;
};

const int = romanToInteger("xiv");

console.log(int);
