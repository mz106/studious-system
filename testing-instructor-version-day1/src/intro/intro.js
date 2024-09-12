export const returnArg = (arg) => {
  return arg;
};

//

// 1st sum example - overcomplicated

// Here, we are going to see the difference between testing behaviour
// and testing implementation.

// We'll run the test using v1 of the sum function
// This function is quite complicated for what it is

// sum v1
export const sum = (n, m) => {
  if (typeof n !== "number" || typeof m !== "number") return false;

  const result = [n, m].reduce((a, b) => a + b, 0);
  return result;
};

// sum V2
// second sum example to demonstrate that we are testing behaviour
// We'll pretend that we've refactored the sum function to make it simpler,
// but the test is written to test the implementation of the function, not
// its behaviour (i.e. what it does/return).

// So the test "sum function - Implementation Tests" will fail.
// But, the

// export const sum = (n, m) => {
//   if (typeof n !== "number" || typeof m !== "number") return false;

//   return n + m;
// };

export const subtract = (n, m) => {
  if (typeof n !== "number" || typeof m !== "number") return false;

  if (m > n) return false;

  return n - m;
};

export const multiply = (n, m) => {
  if (typeof n !== "number" || typeof m !== "number") return "Invalid input!";

  if (n < 0 || m < 0) return "This will result in a negative!";

  return `The result of the multipication is: ${n * m}`;
};
