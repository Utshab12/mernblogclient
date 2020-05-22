import React, {Component} from 'react'
import axios from 'axios'
import Blog from './Blog'
import Navbar from './Navbar'
import { Redirect, Link } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input,Row, Col, FormText } from 'reactstrap';

class MyBlog extends Component {

  constructor(){
    super();
    this.state = {
      path : "https://boiling-savannah-08172.herokuapp.com",
      blogs : [],
      image : ''
    }
  }
  componentDidMount() {
    var data = localStorage.getItem("data")
    console.log(data)
    axios.get(`${this.state.path}/blogs/${data}`).then((res)=>{
      console.log(res)
      this.setState({
        blogs : res.data  
      })
    //   res.data.blogs.map((blog)=>{
        
    //     if(blog.creator == data){
    //        this.state.blogs.push(blog)
    //       // console.log(blog)
    //     }
    //   })
    //   })
    // console.log(this.state.blogs)
  })}
  changePic = (e) =>{
    
    const file = e.target.files
    if(file.length > 0){
      var reader = new FileReader()
      reader.onload = function (e) {
        // document.getElementById('editImg').setAttribute('src',e.target.result)
    }
    }
    reader.readAsDataURL(file[0])
    this.setState({
      image : e.target.files[0]
    }) 
  }
  createBlog = (e) =>{
    // e.preventDefault();

    let bloggy = {
      content: document.getElementById("content").value,
      title : document.getElementById("title").value,
      image: this.state.image
    }
    console.log(bloggy)
    let formdata = new FormData()
  
      formdata.append('content', bloggy.content)
      formdata.append('title', bloggy.title)
      formdata.append('image', bloggy.image)

    axios.post(`https://boiling-savannah-08172.herokuapp.com/user/blog`,  formdata ,
    {
        headers: {
            'Authorization': localStorage.getItem("token"),
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then((res)=>{
      console.log(res)
    })
    window.location.reload(false);
  }

  deleteblog = (val)=>{

    axios.delete(`https://boiling-savannah-08172.herokuapp.com/user/blog/del/${val}`,
    {
        headers: {
            'Authorization': localStorage.getItem("token"),
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then((res)=>{
      console.log(res)
    })

    window.location.reload(false);
  }

  
  render(){
        if(!localStorage.getItem("token")){
          return <Redirect to = '/login' />
        }
    return(

            <React.Fragment>
             <Navbar />
            <Link to='createblog'style={{marginTop: "50px", paddingLeft: "50px"}}><Button>Publish New Blog</Button></Link>
              
              {this.state.blogs.map((blog)=>
                <div>
                  <Button style={{marginTop: "100px"}} onClick={()=>{this.deleteblog(blog._id)}}>Delete</Button>
                <Link to={'/editblog/'+blog._id}  params={{blog: blog._id}}><Button style={{marginTop: "100px"}}>Edit</Button></Link>
                <Blog key={blog._id} data={blog} />
            
                </div>

              )}
              
            </React.Fragment>
            
          )        
          
  }
  
}

export default MyBlog