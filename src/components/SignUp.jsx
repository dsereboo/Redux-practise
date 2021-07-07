import React,{useState} from "react"
import {Container, Row, Col, Card,Form, Button} from "react-bootstrap"
import { connect } from "react-redux"
import { signUp } from "../actions/authActions"


const SignUp=(props)=>{
    const[details, setDetails]=useState({ email:"", password:""})

    const handleSubmit=(event)=>{
        event.preventDefault()
        props.signUp(details.email, details.password)
    }

    const handleChange=(event)=>{
        setDetails({...details, [event.target.name]:event.target.value})
        console.log(details)
    }

    return(
        <Container>
            <Row>
                <Col md={{offset:3, span:5}}>
                    <Card>
                        <Card.Title className="text-center"><h4>Sign Up</h4></Card.Title>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control name="email" type="text" onChange={handleChange} placeholder="Enter your email address" required />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name="password" type="password" onChange={handleChange} placeholder="Enter a password" required />
                                </Form.Group>
                                <Button variant="primary" type="submit" block>Sign Up</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
       
    )
}

const mapDispatchToProps={
    signUp: signUp,
}

export default connect(null,mapDispatchToProps)(SignUp)