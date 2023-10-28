import { createSlice } from "@reduxjs/toolkit";

const TODOItemsSlice = createSlice({
  name: "TODOItems",
  initialState: {},
  reducers: {
    addTODOItem(state, action) {
      const newTODOItems = {
        ...state,
        [action.payload.category]: [
          ...state[action.payload.category],
          action.payload.TODOContent,
        ],
      };
      return newTODOItems;
    },
    addItemsFromStorage(state, action) {
      state = { ...action.payload };
      return state;
    },
    addCategory(state, action) {
      return { ...state, [action.payload]: [] };
    },
    removeCategory(state, action) {
      delete state[action.payload];
    },
    changeCategoryName(state, action) {
      state[action.payload.newName] = [...state[action.payload.ogName]];
      delete state[action.payload.ogName];

      return state;
    },
  },
});

export { TODOItemsSlice };
export const {
  addTODOItem,
  addItemsFromStorage,
  addCategory,
  removeCategory,
  changeCategoryName,
} = TODOItemsSlice.actions;
