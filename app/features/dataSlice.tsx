import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AddNewPayload {
  data: DataType[];
  pageSize: number;
  pageNumber: number;
}

export interface DataType {
  name: string;
  count: number;
}

const initialState: DataType[] = [];

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addNew: (state, action: PayloadAction<AddNewPayload>) => {
      const { pageNumber, pageSize, data } = action.payload;

      let currentIndex = pageSize * (pageNumber - 1);

      for (const dataElement of data) {
        state[currentIndex] = dataElement;
        currentIndex += 1;
      }
    },
    clearAll: (state) => {
      state.length = 0;
    },
  },
});

export const { addNew, clearAll } = dataSlice.actions;
export default dataSlice.reducer;
