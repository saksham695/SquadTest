const compareAge = (objA, objB) => {
  console.log(objA, objB);
  // Ascending order
  if (objA.age < objB.age) return -1;
  return 1;
};
const array = [
  {
    name: "saksham",
    age: 22,
  },
  {
    name: "kartik",
    age: 21,
  },
  {
    name: "prateek",
    age: 9,
  },
];

const sortedArray = array.sort(compareAge);
console.log(sortedArray);
