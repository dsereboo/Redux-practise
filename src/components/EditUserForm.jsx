import React, { useState } from "react"
import {Form,Button} from "react-bootstrap"
import {editUser} from "../actions/userActions"
import {connect} from "react-redux"

const EditUserForm=(props)=>{
    const[user, setUser]=useState({
        id:props.userData.id,
        name:props.userData.name, 
        age:props.userData.age, 
        grade:props.userData.grade,
    })

    const handleChange=(event)=>{
        setUser({...user, [event.target.name]:event.target.value}) 
     
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        props.editUser(user)
        props.handleClose()
    }
       

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" value={user.name} onChange={handleChange}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Age</Form.Label>
                <Form.Control type="text" name="age" value={user.age}onChange={handleChange}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Grade</Form.Label>
                <Form.Control type="text" name="grade" value={user.grade} onChange={handleChange}/>
            </Form.Group>
            <Button type="submit">Submit</Button>
            

            
        </Form>
    )
}


const mapDispatchToProps={ editUser:editUser}
export default connect(null, mapDispatchToProps)(EditUserForm)