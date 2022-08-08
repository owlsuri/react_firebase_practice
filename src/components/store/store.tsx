import { configureStore } from "@reduxjs/toolkit";
import { user } from "../slice/user";

const store = configureStore({
  reducer: {
    userReducer: user.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
