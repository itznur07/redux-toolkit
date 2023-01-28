import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../actions/usersAction";

const usersReducer = createSlice({
  name: "users",
  initialState: {
    users: [],
    lodder: false,
    errors: {}
  },
  reducers: {
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    }
  },
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.lodder = true;
    }
  }
});

export const { addUser } = usersReducer.actions;
export default usersReducer.reducer;
