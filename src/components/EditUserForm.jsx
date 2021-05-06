import React, { useState } from "react"
import {Form,Button} from "react-bootstrap"

const EditUserForm=(props)=>{
    const[user, setUser]=useState({
        id:props.userData.id,
        name:props.userData.name, 
        age:props.userData.age, 
        grade:props.userData.grade,
    })

    const handleChange=(event)=>{
        setUser({...user, [event.target.name]:event.target.value}) 
        console.log(user)
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        props.editUser(user.id, user)
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
export default EditUserForm