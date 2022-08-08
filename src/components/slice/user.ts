import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  id: "",
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { name, id } = action.payload;
      state.name = name;
      state.id = id;
    },
  },
});

export const { addUser } = user.actions;
