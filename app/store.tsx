import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./features/dataSlice";
import dataHasMoreReducer from "./features/dataHasMoreSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    dataHasMore: dataHasMoreReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
