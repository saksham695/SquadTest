export const setDataOnLocalStorage = (key, data) => {
  localStorage.setItem(key, data);
};

export const getDataFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};

export const removeDataFromLocalStorage = (key) => {
  return localStorage.removeItem(key);
};
