import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddUserForm from './components/AddUserForm';
import {addUser} from "./actions/userActions"
import { useState } from 'react';
import Users from './components/Users';



function App(props) {
  const [users,setUsers]=useState([])

  const addUser=(user)=>{
    user.id=Math.floor(Math.random()*100).toString()
    setUsers([...users, user])
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


    
export default App;
