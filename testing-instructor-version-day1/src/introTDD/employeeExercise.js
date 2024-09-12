// export const checkHolErrors = () => {
//   return "hello world";
// };

const employeesArr = [
  {
    id: 1,
    name: "michael",
    role: "instructor",
    hols_remaining: 20,
  },
  {
    id: 2,
    name: "sarah",
    role: "senior dev",
    hols_remaining: 15,
  },
  {
    id: 3,
    name: "chris",
    role: "admin",
    hols_remaining: 25,
  },
];

export const employeesObj = {
  employeesArr: employeesArr,
};

export const checkHolErrors = (obj, entitlement) => {
  if (!Array.isArray(obj.employeesArr) || typeof entitlement !== "number")
    return "Invalid input";

  const editsArr = [];

  const checkedEmployeeArr = obj.employeesArr.map((el) => {
    let newEl = { ...el };

    if (newEl.hols_remaining !== entitlement) {
      newEl.hols_remaining =
        newEl.hols_remaining + entitlement - newEl.hols_remaining;

      newEl.isEdit = true;

      editsArr.push(newEl.id);
    }
    return newEl;
  });

  return {
    employeesArr: checkedEmployeeArr,
    editsArr: editsArr,
  };
};

console.log(checkHolErrors(employeesObj, 20));
