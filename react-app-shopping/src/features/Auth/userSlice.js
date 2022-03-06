import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "api/userApi";
import StorageKeys from "../../constants/storage-keys";

export const register = createAsyncThunk("user/register", async (payload) => {
  // call API
  const data = await userApi.register(payload);
  // save local storage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
  // return
  return data.user;
});

export const login = createAsyncThunk("user/login", async (payload) => {
  // call API
  const data = await userApi.login(payload);
  // save local storage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
  // return
  return data.user;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    settings: {},
  },
  reducers: {
    logout(state) {
      //clear local storage
      localStorage.removeItem(StorageKeys.TOKEN);
      localStorage.removeItem(StorageKeys.USER);
      state.current = {};
    },
  },
  extraReducers: {
    //"user/register/fullField":
    [register.fullField]: (state, action) => {
      state.current = action.payload;
    },
    [login.fullField]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { reducer, actions } = userSlice;
export const { logout } = actions;
export default reducer;
