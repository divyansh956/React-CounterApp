import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 0,
    },
    reducers: {
        increase: (state) => {
            state.counter++;
        },
        decrease: (state) => {
            state.counter--;
        },
        reset: (state) => {
            state.counter = 0;
        },
    },
});

export const { increase, decrease, reset } = CounterSlice.actions;
export default CounterSlice;