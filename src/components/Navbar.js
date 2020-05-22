import React, {Component, useState } from 'react'
import {Redirect ,Link} from 'react-router-dom'
import axios from 'axios'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'react-bootstrap';

class Navbars extends Component{
  

  logoutuser = () =>{
    
    axios.post(`https://boiling-savannah-08172.herokuapp.com/user/logout`,'',
    {
        headers: {
            'Authorization': localStorage.getItem('token'),
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then((res)=>{
      console.log(res)
    })
    localStorage.removeItem('token')
    localStorage.removeItem('data')
    
  }

  render(){
    // if(!localStorage.getItem('token')){
    //   return <Redirect to= '/login' />
    // }
  //   const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => setIsOpen(!isOpen);
    return(


      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">BLOGGING APP</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link href ='/communityBlogs'>community Blogs</Nav.Link>
    <Nav.Link href ='/myBlogs'>My Blogs</Nav.Link>
  
    <Nav.Link href ='/login'>Login</Nav.Link>
    <Nav.Link href ='/signup'>SignUp</Nav.Link>
 
   <Nav.Link href ='/login' onClick={(e)=>this.logoutuser(e)}>Logout</Nav.Link>  
   
     
    </Nav>
   
  </Navbar.Collapse>
</Navbar>

      
    // <Navbar color="light" light expand="sm">
    //     <NavbarBrand href="/">BLOGGING APP</NavbarBrand>
    //     {/* <NavbarToggler onClick={toggle} />
    //     <Collapse isOpen={isOpen} navbar> */}
    //       <Nav className="mr-auto" navbar>
    //         <NavItem>
    //           <Link to ='/communityBlogs'><NavLink>Community Blogs</NavLink></Link>
    //         </NavItem> 
    //         <NavItem>
    //         <Link to ='/myBlogs'><NavLink>My Blogs</NavLink></Link>
    //         </NavItem>
    //         <NavItem>
    //           <Link to ='/login'><NavLink  >Login</NavLink></Link>
    //         </NavItem>
    //         <NavItem >
    //           <Link to ='/signup'><NavLink>/ SignUp</NavLink></Link>
    //         </NavItem>
    //         <NavItem>
    //             <Link to='/login'><NavLink onClick={(e)=>this.logoutuser(e)} >Logout</NavLink></Link>
    //         </NavItem>
    //       </Nav>
    //       {/* </Collapse> */}
    //   </Navbar>
    
    )
  }
}

export default Navbars