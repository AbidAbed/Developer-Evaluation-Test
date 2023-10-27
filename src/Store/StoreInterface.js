import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {
  TODOItemsSlice,
  addTODOItem,
  addItemsFromStorage,
} from "./Slices/TODOItemsSlice";

const StoreInterface = configureStore({
  reducer: {
    TODOItems: TODOItemsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
setupListeners(StoreInterface.dispatch);

export { StoreInterface, addTODOItem, addItemsFromStorage };
