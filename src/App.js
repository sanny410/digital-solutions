import './App.scss';
import {Route, Routes} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";

import UserList from "./components/UserLIst";
import ProfileUser from "./components/ProfileUser";
import PostsList from "./components/PostsList";
import Post from "./components/Post";
import Header from "./components/Header";
import {listUserLoad, postListLoad} from "./store/actions";


function App() {

    const dispatch = useDispatch();
    const list = useSelector(state => state.userList);
    const posts = useSelector(state => state.postList);


    const loadUserList = async() => {
        const response = await axios
            .get("https://jsonplaceholder.typicode.com/users")

        dispatch(listUserLoad(response.data))
    }

    const loadPostList = async() => {
        const response = await axios
            .get("https://jsonplaceholder.typicode.com/posts")

        dispatch(postListLoad(response.data))
    }

    useEffect(() => {
        loadUserList()
    },[]);

    useEffect(() => {
        loadPostList()
    },[]);


  return (
    <div className="App">
        <Header />
      <Routes>
          <Route exact path='/' element={<UserList list={list}/>}/>
          <Route path='/profile/:id' element={<ProfileUser list={list} posts={posts}/>}/>
          <Route path='/posts' element={<PostsList posts={posts}/>}/>
          <Route path='/post/:id' element={<Post />}/>
      </Routes>
    </div>
  );
}

export default App;
