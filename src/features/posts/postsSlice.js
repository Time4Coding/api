import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  isLoading: false,
  error: "",
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts(state, actions) {
      state.isLoading = true;
    },
    getPostsSuccess(state, actions) {
      state.posts = actions.payload;
      state.isLoading = false;
    },
    getPostsFail(state, actions) {
      state.isLoading = false;
      state.error = actions.payload;
    },
  },
});

export const { getPosts, getPostsFail, getPostsSuccess } = postSlice.actions;

export default postSlice.reducer;
