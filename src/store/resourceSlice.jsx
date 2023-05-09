import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const resourceSlice = createSlice({
  name: "resource",
  initialState,
  reducers: {
    fetchStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchSuccess(state, action) {
      state.isLoading = false;
      state.items = action.payload;
    },
    fetchFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    createStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    createSuccess(state, action) {
      state.isLoading = false;
      state.items.push(action.payload);
    },
    createFailure(state, action) {
      console.log(action.payload);

      state.isLoading = false;
      state.error = action.payload;
    },
    updateStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    updateSuccess(state, action) {
      state.isLoading = false;
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[index] = action.payload;
    },
    updateFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    deleteStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    deleteSuccess(state, action) {
      state.isLoading = false;
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    deleteFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchStart,
  fetchSuccess,
  fetchFailure,
  createStart,
  createSuccess,
  createFailure,
  updateStart,
  updateSuccess,
  updateFailure,
  deleteStart,
  deleteSuccess,
  deleteFailure,
} = resourceSlice.actions;

export default resourceSlice.reducer;
