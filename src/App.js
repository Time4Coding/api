import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getUserFail, getUserSuccess } from "./redux/actions/actions";
import axios from "axios";

import UserList from "./components/user/UserList";
import PostsList from "./features/posts/PostsList";
import { Route, Routes } from "react-router-dom";
import CommentList from "./features/comments/CommentList";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const fetchApi = async () => {
        dispatch(getUser());
        const result = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        dispatch(getUserSuccess(result.data));
      };
      fetchApi();
    } catch (error) {
      dispatch(getUserFail(error.message));
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route
          index
          element={
            <>
              <h1>List Of Users</h1>
              <UserList />
            </>
          }
        />
        <Route path="/posts/:user/:id" element={<PostsList />} />
        <Route path="/comments/:post/:id" element={<CommentList />} />
        <Route path="*" element={<h1>404 Not Found!</h1>} />
      </Routes>
    </div>
  );
}

export default App;
