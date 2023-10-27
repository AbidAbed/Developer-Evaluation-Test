import { createSlice } from "@reduxjs/toolkit";

const TODOItemsSlice = createSlice({
  name: "TODOItems",
  initialState: { Default: [], Anime: [] },
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
      return { ...action.payload };
    },
  },
});

export { TODOItemsSlice };
export const { addTODOItem, addItemsFromStorage } = TODOItemsSlice.actions;
