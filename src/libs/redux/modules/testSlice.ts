import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITestState {
  value: string[];
}

const initialState: ITestState = {
  value: [],
};

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    addTest: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addTest } = testSlice.actions;

export default testSlice.reducer;
