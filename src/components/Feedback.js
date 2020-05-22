import React , {Component} from 'react'
import {
  Col, Row, Input
} from 'reactstrap';

class Feedback extends Component{
  render(){
    return(
      <div >
        <Row>
          <Col sm ={2}></Col>
          <Col sm ={8} >
            <h4>Comments</h4>
            <Input value ="Write comments here"/>
        </Col>
      </Row>
    </div>
    )
  }
}

export default Feedback