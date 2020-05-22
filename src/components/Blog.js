import React , {Component} from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Col, Row
} from 'reactstrap';
import ShowComments from './ShowComments'
import axios from 'axios'
class Blog extends Component{
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
    return(
      <div >
        <Row style={{marginTop:"20px", }}>
          <Col sm ={2}></Col>
          <Col sm={8} >
       
            <Card  >
            <CardImg top style={{ height: "200px", width:"100%"}} src={`https://boiling-savannah-08172.herokuapp.com/${this.props.data.image}`} alt="Card image cap" />
            <CardBody>
                <CardTitle style={{fontWeight: "bold"}}>{this.props.data.title}</CardTitle>
              <CardText>{this.props.data.content}</CardText>
              <h5>All Comments</h5>
              { this.state.feedbacks.map((feed)=>{
                if(feed.package == this.props.data._id){
                    return(<ShowComments data={feed} />);
                }
              })
                
                }
            </CardBody>          
          </Card>
          

        </Col>
      </Row>
    </div>
    )
  }
}

export default Blog