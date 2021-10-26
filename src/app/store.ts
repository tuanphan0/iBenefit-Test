import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import deviceReducer from '../features/device/deviceSlice';
import tokenAuthReducer from '../features/login/tokenAuthSlice';

export const store = configureStore({
  reducer: {
    device:deviceReducer,
    token:tokenAuthReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
