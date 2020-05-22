import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import CommunityBlog from '../src/components/CommunityBlog'
import MyBlogs from '../src/components/MyBlog'
import SignUp from '../src/components/SignUp'
import LoginForm from '../src/components/LoginForm'
import EditBlog from '../src/components/EditBlog'
import CreateBlog from '../src/components/CreateBlog'

function App() {
  return (
    <Router>
      <div className= "App">
        <Route exact path='/' component={CommunityBlog} />
        <Route path='/communityBlogs' component={CommunityBlog} />
        <Route path='/myBlogs' component={MyBlogs} />
        <Route path='/signup' component={SignUp} />
        <Route path='/login' component={LoginForm} />
        <Route path= '/editblog/:id' component={EditBlog} />
        <Route path= '/createblog' component={CreateBlog} />
      </div>
    </Router>
  );
}

export default App;
