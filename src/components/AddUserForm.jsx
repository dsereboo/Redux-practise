import React, { useState} from "react"
import { Form, Button } from "react-bootstrap"
import {addUser} from "../actions/userActions"
import {connect} from "react-redux"
import Users from "./Users"

const AddUserForm=(props)=>{
    const[user, setUser]=useState({
        name:"", age:"", grade:"", id:""
    })

    const handleChange=(event)=>{
        setUser({...user, [event.target.name]: event.target.value})
        console.log(user)
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        props.addNewUser(user)
        setUser()
    }


    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Enter your name" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Age</Form.Label>
                <Form.Control name="age" type="text" placeholder="Enter your age" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Grade</Form.Label>
                <Form.Control name="grade" type="text" placeholder="Enter your grade" onChange={handleChange}  />
            </Form.Group>
            <Button variant="primary" size="block" type="submit">Create User</Button>
        </Form>
    )
}


const mapDispatchToProps={ addNewUser: addUser}
export default connect(null, mapDispatchToProps)(AddUserForm)