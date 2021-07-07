import React from "react"
import {Container,Row,Col,Button} from "react-bootstrap"
import AddUserForm from './AddUserForm';
import Users from './Users';
import {connect} from "react-redux"
import { signOut } from "../actions/authActions";


const Homepage=(props)=>{

  const handleClick=()=>{
    props.signOut()
  }

    return (
      <Container>
        <Row>
          <h1> CRUD App</h1>
          <Button variant="primary" onClick={handleClick}>Logout</Button>
        </Row>
        <Row>
          <Col md="4">
            <AddUserForm />
          </Col>
          <Col>
            <Users />
          </Col>
        </Row>
      </Container>
    );
}

const mapDispatchToProps={
  signOut: signOut,
}

export default connect(null,mapDispatchToProps)(Homepage)