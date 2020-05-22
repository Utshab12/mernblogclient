import React, {Component} from 'react'
import axios from 'axios'
import Blog from './Blog'
import Navbar from './Navbar'
import Comment from './Comment'

class CommunityBlog extends Component {

  constructor(){
    super();
    this.state = {
      path : "https://boiling-savannah-08172.herokuapp.com",
      blogs : [],
      feedbacks : []
    }
  }
  componentDidMount() {
    axios.get(`${this.state.path}/blogs`).then((res)=>{
      console.log(res.data)
      this.setState({
        blogs : res.data.blogs  
      })
      this.setState({
        feedbacks : res.data.feedback
      })
    })
   
  }


  render(){
    console.log(this.state.feedbacks)
    
    return(

            <React.Fragment>
              <Navbar />
              {this.state.blogs.map((blog)=>
                <div>
                <Blog key={blog._id} data={blog} />    
                <Comment data = {blog._id} />
                </div>
              )}
              
            </React.Fragment>
            
          )        
          
  }
  
}

export default CommunityBlog