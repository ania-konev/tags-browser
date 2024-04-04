import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: boolean = true;

export const dataHasMoreSlice = createSlice({
  name: "dataHasMore",
  initialState,
  reducers: {
    setHasMore: (state, action: PayloadAction<boolean>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setHasMore } = dataHasMoreSlice.actions;
export default dataHasMoreSlice.reducer;
