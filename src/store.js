import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/reducer/userReducer";
import postSlice from "./features/posts/postsSlice";
import commentSlice from "./features/comments/commentSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
    posts: postSlice,
    comments: commentSlice,
  },
});

// import { createStore} from "redux";
// import reducer from "./redux/reducer/rootReducer";

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export default store;
