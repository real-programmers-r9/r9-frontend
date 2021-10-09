import { configureStore } from '@reduxjs/toolkit';
import testSlice from 'src/library/redux/modules/testSlice';

export const store = configureStore({
  reducer: {
    testSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
