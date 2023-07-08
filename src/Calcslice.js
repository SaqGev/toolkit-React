import { createSlice } from "@reduxjs/toolkit";

const CalcSlice = createSlice({
    name: 'calc',
    initialState: {
        result: 0,
        current: 0,
    },
    reducers: {
        checking(state, action) {
            state.result += action.payload;
        },
        slideingNext(state) {
            state.current += 100;
        },
        slideingPrev(state) {
            state.current -= 100;
        }
    }
})

export default CalcSlice.reducer;
export const { checking, slideingNext, slideingPrev } = CalcSlice.actions;