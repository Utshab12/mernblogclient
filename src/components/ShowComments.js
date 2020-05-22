import React , {Component} from 'react'
import {
  Card, Button, Col, Row, Input, Label
} from 'reactstrap';

import axios from 'axios'


class ShowComments extends Component{

  delComment = (val) =>{
    const userid = localStorage.getItem("data")
    console.log(userid)
    console.log(userid)
    if(this.props.data.creator === userid ){
      axios.delete(`https://boiling-savannah-08172.herokuapp.com/blog/comment/del/${val}`,
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
  }

  render(){
    // console.log(this.props.data)
    return(
      <div >
        <Row style={{ marginTop: "10px"}} >
          <Col sm ={2}></Col>
          <Col sm ={8} >
            <Input value = {this.props.data.comments} />
            <Button style={{float: "right"}} onClick={()=>this.delComment(this.props.data._id)}>Delete</Button>
      
            </Col>
      </Row>
                    
              
            
            
      
    </div>
    )
  }
}

export default ShowComments