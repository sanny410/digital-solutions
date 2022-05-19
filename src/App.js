import './App.scss';
import {Route, Routes} from "react-router-dom";
import UserList from "./components/UserLIst";
import ProfileUser from "./components/ProfileUser";
import PostsList from "./components/PostsList";
import Post from "./components/Post";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
        <Header />
      <Routes>
          <Route exact path='/' element={<UserList />}/>
          <Route path='/profile:id' element={<ProfileUser />}/>
          <Route path='/posts' element={<PostsList />}/>
          <Route path='/post:id' element={<Post />}/>
      </Routes>
    </div>
  );
}

export default App;
