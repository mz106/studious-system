// Activity 2.1

// The checkHolErrors function processes an object containing an array of employee
// data (employeesArr) and checks whether each employee's remaining holidays (hols_remaining)
//  matches a given holiday entitlement. It then adjusts the holiday balance if it does not
// match the entitlement and tracks which employees were modified.

const employeesArr = [
  { id: 1, name: "michael", role: "instructor", hols_remaining: 20 },
  { id: 2, name: "sarah", role: "senior dev", hols_remaining: 15 },
  { id: 3, name: "chris", role: "admin", hols_remaining: 25 },
];

const employeesObj = { employeesArr };

// Explaination

// The function checkHolErrors takes 2 args;

//   1. The object employeesObj, containing an array called employeesArr
//   2. A number representing a holiday entitlement.

// The function will then check the elements in the array and then do two things;

//   1. Set the value of the property "hols_remaining" to that of the second arg if different
//   2. Record the IDs of the modified employees in the form of an array

// Example

// const result = checkHolErrors(employeesObj, 20);

// Once the function checkHolError is called, it would mutate the data thus;

// The hols_remaining for "sarah" is adjusted from 15 to 20.
// The hols_remaining for "chris" is adjusted from 25 to 20.
// The IDs of the modified employees are stored in an array called editsArr and returned in the arg object
// A key 'isEdit' is added to each object of employeesArr if it has been edited.

// Example return data;

// {
//   employeesArr: checkedEmployeeArr,
//   editsArr: editsArr,
// };

//   { id: 1, name: "michael", role: "instructor", hols_remaining: 20 },
//   { id: 2, name: "sarah", role: "senior dev", hols_remaining: 15, isEdit: true },
//   { id: 3, name: "chris", role: "admin", hols_remaining: 25, isEdit: true },

export const checkHolErrors = () => {};

console.log(checkHolErrors(employeesObj, 20));
