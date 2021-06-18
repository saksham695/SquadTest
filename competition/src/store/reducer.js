import { uuidv4 } from "../utils/utilities";
import { ACTIONS } from "./action";

export const initialState = {
  taskList: [],
};

export const reducer = (state, action) => {
  const { payload, type } = action;
  console.log(type);
  switch (type) {
    case ACTIONS.ADD_KEY: {
      let listObject = {
        title: payload,
        list: [],
      };
      return {
        ...state,
        taskList: [...state.taskList, listObject],
      };
    }

    case ACTIONS.ADD_LIST_ITEM: {
      const { headerIndex, listItem } = payload;
      const copyState = state.taskList;
      const currentListObject = copyState[headerIndex];
      currentListObject.list = [
        ...currentListObject.list,
        { item: listItem, key: uuidv4() },
      ];
      copyState[headerIndex] = currentListObject;
      return {
        ...state,
        taskList: copyState,
      };
    }

    case ACTIONS.DRAGGED: {
      const copyState = state.taskList;
      const { finalItemPosition, initialItemPosition } = payload;
      const pickedItem =
        copyState[initialItemPosition.groupIndex].list[
          initialItemPosition.itemIndex
        ];
      // copyState[initialItemPosition.groupIndex].list[
      //   initialItemPosition.itemIndex
      // ] =
      //   copyState[finalItemPosition.groupIndex].list[
      //     finalItemPosition.itemIndex
      //   ];
      // copyState[finalItemPosition.groupIndex].list[
      //   finalItemPosition.itemIndex
      // ] = pickedItem
      copyState[initialItemPosition.groupIndex].list = copyState[
        initialItemPosition.groupIndex
      ].list.filter((item, index) => index !== initialItemPosition.itemIndex);
      copyState[finalItemPosition.groupIndex].list.push(pickedItem);
      console.log("OUTPUT", copyState);

      return {
        ...state,
        taskList: copyState,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
