import { ACTIONS } from "./action";

export const initialState = {
  name: "",
};

export const reducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    default:
      return {
        ...state,
      };
  }
};
