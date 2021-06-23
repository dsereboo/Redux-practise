import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddUserForm from './components/AddUserForm';
//import {deleteUser} from "./actions/userActions"
import {connect} from "react-redux"
import Users from './components/Users';



function App(props) {
  

  const addUser=(user)=>{
    //user.id=Math.floor(Math.random()*100).toString()
  }

  const deleteUser=(id)=>{
    //const undeletedUsers=users.filter(user=> user.id!==id)
    //setUsers(undeletedUsers)
    //props.deleteUser(id)
  }

  const editUser=(id, updatedUser)=>{
    //setUsers( 
      //users.map(user=> user.id ===id? updatedUser: user)
    //)
    //props.editUser(updatedUser)
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
          <Users  deleteUser={deleteUser} editUser={editUser}/>
        </Col>
      </Row>
    </Container>
  )
}

const mapDispatchToProps={deleteUser: ""}
    
export default connect(null, mapDispatchToProps)(App);
