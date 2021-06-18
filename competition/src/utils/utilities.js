// const compareAge = (objA, objB) => {
//   console.log(objA, objB);
//   // Ascending order
//   if (objA.age < objB.age) return -1;
//   return 1;
// };
// const array = [
//   {
//     name: "saksham",
//     age: 22,
//   },
//   {
//     name: "kartik",
//     age: 21,
//   },
//   {
//     name: "prateek",
//     age: 9,
//   },
// ];

// const sortedArray = array.sort(compareAge);

export function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// console.log(uuidv4());
