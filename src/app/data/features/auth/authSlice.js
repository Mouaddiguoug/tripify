"use client";

import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  login: {
    loading: false,
    user: {},
    error: "",
    success: false,
  },
  register: {
    loading: false,
    user: {},
    error: "",
    success: false,
  },
};

const register = createAsyncThunk("auth/register", async (user) => {
    if (!user.firstName || !user.lastName || !user.email || !user.phoneNumber)
    return toast("please provide the needed data");
  const response = await axios.post(
    "http://13.48.44.188:8000/signup",
    {
      "content-type": "application/json",
      data: user,
    }
  );
  return response.data;
});

const login = createAsyncThunk("auth/login", async (user) => {
  if (!user.email || !user.password)
    return toast("please provide the needed data");
  const response = await axios.post("http://13.48.44.188:8000/login", {
    "content-type": "application/json",
    data: user,
  });
  return response.data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.login.success = false;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.register.success = false;
      state.register.loading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.register.loading = false;
      state.register.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.register.error = "";
      state.register.success = true;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.register.loading = false;
      state.register.user = {};
      if(action.error.message.split(" ")[5] == 400) toast("this email already exists");
      state.register.error = action.error.message;
    });
    builder.addCase(login.pending, (state) => {
      state.login.success = false;
      state.login.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.login.loading = false;
      state.login.user = action.payload.user;
      console.log(action.payload.user);
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.login.success = true;
      state.login.error = "";
    });
    builder.addCase(login.rejected, (state, action) => {
      state.login.loading = false;
      state.login.success = false;
      state.login.user = {};
      if (action.error.message.split(" ")[5] == 403) {
        toast("username or password is incorrect");
      }
      state.login.error = action.error.message;
    });
  },
});

export const { logOut } = authSlice.actions;

export { register, login };

export default authSlice.reducer;