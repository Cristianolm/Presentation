import { createSlice } from "@reduxjs/toolkit";
import { TimesOutClasses } from "../../models/timesOut";

interface timesOut {
  fast4x: number;
  fast3x: number;
  fast2x: number;
  fast: number;
  mid8x: number;
  mid7x: number;
  mid6x: number;
  mid5x: number;
  mid4x: number;
  mid3x: number;
  mid2x: number;
  mid: number;
  slow4x: number;
  slow3x: number;
  slow2x: number;
  slow: number;
}

const initialState: timesOut = TimesOutClasses;

export const timesOutSlice = createSlice({
  name: "timesOut",
  initialState: initialState,
  reducers: {},
});

export default timesOutSlice.reducer;
