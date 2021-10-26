import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import deviceService from "../../service/deviceService";
import { getCookies, setCookies } from "../../lib/utils";
export interface IState {
  loading: boolean;
  error: string;
  deviceCode: string;
}

const initialState: IState = {
  loading: false,
  error: "",
  deviceCode: getCookies("device") || "",
};

export const createDeviceAsyncAsync = createAsyncThunk(
  "api/device",
  async (request: number) => {
    const result = await deviceService.createDevice(request);
    setCookies("device", result.data.device_code, 5);
    return result.data.device_code;
  }
);

export const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createDeviceAsyncAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(createDeviceAsyncAsync.rejected, (state, action) => {
        state.error = action.error.message as string;
        state.loading = false;
      })
      .addCase(createDeviceAsyncAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.deviceCode = action.payload;
      });
  },
});
export const deviceCode = (state: RootState) => state.device.deviceCode;
export default deviceSlice.reducer;
