import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  isLoading: false,
  error: "",
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    getcomment(state, actions) {
      state.isLoading = true;
    },
    getcommentSuccess(state, actions) {
      state.comments = actions.payload;
      state.isLoading = false;
    },
    getcommentFail(state, actions) {
      state.isLoading = false;
      state.error = actions.payload;
    },
  },
});

export const { getcomment, getcommentFail, getcommentSuccess } =
  commentSlice.actions;

export default commentSlice.reducer;
