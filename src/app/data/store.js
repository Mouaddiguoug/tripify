"use client";

import { configureStore } from "@reduxjs/toolkit";
import eventsSlice from "./features/events/eventsSlice"
import authSlice from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    events: eventsSlice
  },
});