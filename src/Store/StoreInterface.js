import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const StoreInterface = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
setupListeners(StoreInterface.dispatch);

export { StoreInterface };
