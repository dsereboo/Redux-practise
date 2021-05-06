import {connect } from "react-redux"
import{addUser} from "./Store/usersActions"
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddUserForm from './components/AddUserForm';
import { useState } from 'react';
import Users from './components/Users';



function App(props) {
  const initalState=[
    {id:"dsnkn768", name:"Daniel", age:"15", grade:"9"},
    {id:"ds66n768", name:"Abena", age:"17", grade:"10"},
    {id:"ds99n768", name:"Adwoa", age:"17", grade:"10"}
  ]

  const [users,setUsers]=useState(initalState)

  const addUser=(user)=>{
    props.addUser(user)
  }

  const deleteUser=(id)=>{
    const undeletedUsers=users.filter(user=> user.id!==id)
    setUsers(undeletedUsers)
  }

  const editUser=(id, updatedUser)=>{
    setUsers( 
      users.map(user=> user.id ===id? updatedUser: user)
    )
    console.log("Clicked")
  }
  

  return (
    <Container>
      <Row>
        <h1> CRUD App</h1>
      </Row>
      <Row>
        <Col md="4">
          <AddUserForm addUser={addUser}/>
        </Col>
        <Col>
          <Users userData={users} deleteUser={deleteUser} editUser={editUser}/>
        </Col>
      </Row>
    </Container>
  )
}


  const mapStateToProps=(state)=>(
    {users: state}
  )

  const mapDispatchToProps={
    /* same as addUser since they both have the same reference name*/
    addUser: addUser
  }
    
export default connect(mapStateToProps, mapDispatchToProps)(App);
