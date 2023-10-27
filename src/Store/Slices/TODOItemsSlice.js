import { createSlice } from "@reduxjs/toolkit";

const TODOItemsSlice = createSlice({
  name: "TODOItems",
  initialState: { Default: ["TODO 1"], Anime: ["TODO Anime"] },
  reducers: {
    addTODOItem(state, action) {
      const newTODOItems = {
        ...state,
        [action.payload.category]: [...state[action.payload.category], action.payload.TODOContent],
      };
      return newTODOItems;
    },
  },
});

export { TODOItemsSlice };
export const { addTODOItem } = TODOItemsSlice.actions;
