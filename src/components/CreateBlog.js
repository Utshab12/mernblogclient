import React, {Component} from 'react'
import axios from 'axios'
import Blog from './Blog'
import Navbar from './Navbar'
import { Redirect, Link } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input,Row, Col, FormText } from 'reactstrap';

class CreateBlog extends Component {

  constructor(){
    super();
    this.state = {
      path : "https://boiling-savannah-08172.herokuapp.com",
      blogs : [],
      image : ''
    }
  }

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

  render(){
        if(!localStorage.getItem("token")){
          return <Redirect to = '/login' />
        }
    return(

            <React.Fragment>
             <Navbar />
            
              <Row style={{marginTop:"40px" }}>
              <Col sm ={2}></Col>
              <Col sm={8} >

              <Form>
                <h1>Create Your Blog</h1>
              
                <Input type="file" name="file" id="image"
                
                onChange = { (e)=>this.changePic(e)} 
                />
                <Label>Title</Label>
                <Input
                type="text" placeholder="Enter your blog title"  name="title" 
                id = "title"
                />

                <Label>Write your blog</Label>
                <Input
                type="textarea" placeholder="Enter your blog title"  name="content"
                id = "content" 
                />
               <Button color="primary" onClick={ (e)=>{this.createBlog(e)}} >Publish</Button>
              </Form>
              </Col>
              </Row> 
              
            </React.Fragment>
            
          )        
          
  }
  
}

export default CreateBlog