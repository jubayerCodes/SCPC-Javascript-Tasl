// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const calculate = (num1, num2, operator) => {
  let result;

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      result = "Infinity";
    } else {
      result = num1 / num2;
    }
  } else {
    result = "Invalid Operator";
  }

  return result;
};

const result = calculate(0, 10, "/");

console.log(result);
