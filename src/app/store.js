import { configureStore } from "@reduxjs/toolkit";
import listObjReducer from "../features/listObj/listObjSlice";

export const store = configureStore({
  reducer: {
    listObj: listObjReducer,
  },
});
