import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./listObjAPI";

const initialState = {
  value: [],
  status: "idle",
  // test: [],
  // selected: null,
};

export const listObjSlice = createSlice({
  name: "listObj",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addItem: (state, action) => {
      state.value = [
        ...state.value,
        {
          Title: "",
          Contents: [
            { value: "", id: 0 },
            { value: "", id: 1 },
          ],
          id: action.payload,
        },
      ];
    },
    deleteItem: (state, action) => {
      state.value = state.value.filter(el => el["id"] !== action.payload);
    },

    setTitle: (state, action) => {
      state.value = state.value.map(el => {
        if (el.id === action.payload.id) {
          el.Title = action.payload.title;
          return el;
        } else {
          return el;
        }
      });
    },
    addContent: (state, action) => {
      state.value = state.value.map(el => {
        if (el.id === action.payload.id) {
          el.Contents = [
            ...el.Contents,
            { value: "", id: action.payload.subId },
          ];
          return el;
        } else {
          return el;
        }
      });
    },

    deleteContent: (state, action) => {
      state.value = state.value.map(el => {
        if (el.id === action.payload.id) {
          el.Contents = el.Contents.filter(
            el => el["id"] !== action.payload.subId
          );
          return el;
        } else {
          return el;
        }
      });
    },

    setContent: (state, action) => {
      state.value = state.value.map(el => {
        if (el.id === action.payload.id) {
          el.Contents.map(elSub => {
            if (elSub.id === action.payload.subId) {
              elSub.value = action.payload.contentValue;
              return el;
            } else {
              return el;
            }
          });
          return el;
        } else {
          return el;
        }
      });
    },
  },
});

export const {
  addItem,
  deleteItem,
  setTitle,
  setContent,
  addContent,
  deleteContent,
} = listObjSlice.actions;

export const selectListLength = state => state.listObj.length;
export const selectList = state => state.listObj;

export default listObjSlice.reducer;
