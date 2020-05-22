import React , {Component} from 'react'
import {
  Card, Button, Col, Row, Input, Label
} from 'reactstrap';
import axios from 'axios';

class Comment extends Component{
constructor () {
  super();
  this.state = {
    comment : ''
  }
}
  inputChange = (e) =>{
    const comment = e.target.value
    this.setState({
      comment : comment
    })
    
  }

  submitComment=()=>{
    // /blog/comment/:id
    // const comment = document.getElementById("comm").value
    const comment  = this.state.comment;
    // alert(comment)
    const blogId = this.props.data
    // alert(blogId)
    if(comment != ""){
      let obj = {
        comments: comment
      }
      alert(comment)
      axios.post(`https://boiling-savannah-08172.herokuapp.com/blog/comment/${blogId}`,  obj ,
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
    window.location.reload(false)
    }
  }

  render(){
    return(
      <div >
        <Row>
          <Col sm ={2}></Col>
          <Col sm ={8} >
            <Input placeholder ="Write comments here" onChange = {(e)=>this.inputChange(e)} /> 
          </Col>
          <Button onClick={()=>this.submitComment()}>Save</Button>
      </Row>
    </div>
    )
  }
}

export default Comment