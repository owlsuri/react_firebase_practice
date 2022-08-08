import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  id: "",
  uid: "",
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { name, id, uid } = action.payload;
      state.name = name;
      state.id = id;
      state.uid = uid;
    },
  },
});

export const { addUser } = user.actions;
