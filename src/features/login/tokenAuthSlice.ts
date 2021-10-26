import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import {
  getCookies,
  setCookies,
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
} from "../../lib/utils";
import { AuthenticationDto } from "../../service/dto/AuthenticationDto";
import tokenAuthService from "../../service/tokenAuthService";
export interface IState {
  loading: boolean;
  error: string;
  user: any;
}
const userStr = getLocalStorage("user") || "";
const user = userStr ? JSON.parse(userStr) : null;
const initialState: IState = {
  loading: false,
  error: "",
  user: user,
};

export const getTokenAsyncAsync = createAsyncThunk(
  "api/login",
  async (request: AuthenticationDto) => {
    const result = await tokenAuthService.getToken(request);
    setLocalStorage("token", result.token);
    setLocalStorage("user", result.user);
    return result;
  }
);

export const tokenAuthSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    logout: () => {
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTokenAsyncAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTokenAsyncAsync.rejected, (state, action) => {
        state.error = action.error.message as string;
        state.loading = false;
      })
      .addCase(getTokenAsyncAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user=action.payload.user;
      });
  },
});
export const getUser=(state: any)=> state.token.user;
export const { logout } = tokenAuthSlice.actions;
export default tokenAuthSlice.reducer;
