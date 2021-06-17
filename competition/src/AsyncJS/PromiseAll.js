const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promiseA");
  }, 1000);
});
const promise2 = "promiseB";
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "promiseC");
});

const fetchData = async () => {
  const result = await Promise.all([promise1, promise2, promise3])
    .then((values) => {
      console.log(values);
      return values;
    })
    .catch((err) => console.log(err));
  console.log(result);
};
fetchData();
