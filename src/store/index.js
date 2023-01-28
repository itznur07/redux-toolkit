import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer";

const store = configureStore({
  reducer: {
    users: userReducer
  },
  middleware: [...getDefaultMiddleware()]
});

export default store;
