import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const calculateSlice = createSlice({
  name: "calculate",
  initialState,
  reducers: {
    attach: (state, action) => {
      console.log(action.payload);
      state.value.push(action.payload);
    },
  },
});

export const { attach } = calculateSlice.actions;
export default calculateSlice.reducer;
