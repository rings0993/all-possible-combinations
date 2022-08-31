import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import listObjReducer from "../features/listObj/listObjSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    listObj: listObjReducer,
  },
});
