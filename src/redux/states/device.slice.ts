import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { device } from "../../models";

const initialState: device = { type: "" };

export const deviceSlice = createSlice({
  name: "device",
  initialState: initialState,
  reducers: {
    setDevice: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
  },
});

export default deviceSlice.reducer;
export const { setDevice } = deviceSlice.actions;
