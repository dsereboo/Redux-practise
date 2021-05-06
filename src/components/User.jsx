import React,{useState} from "react"
import { Card,Button,Col,Modal } from "react-bootstrap"
import EditUserForm from "./EditUserForm"

const User=(props)=>{
    const hanldeClick=()=>{
        props.deleteUser(props.userInfo.id)
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <Col md="5">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditUserForm userData={props.userInfo} editUser={props.editUser} handleClose={handleClose}/>
                </Modal.Body>
            </Modal>
            <Card>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Student</Card.Subtitle>
                    <Card.Title>{props.userInfo.id}</Card.Title>
                    <Card.Text>
                        <p>Name: {props.userInfo.name}</p>
                        <p>Age: {props.userInfo.age}</p>
                        <p>Grade: {props.userInfo.grade}</p>
                    </Card.Text>
                    <Card.Link href="#"><Button size="sm" variant="primary" onClick={handleShow}>Edit</Button></Card.Link>
                    <Card.Link href="#"><Button size="sm" variant="danger" onClick={hanldeClick}>Delete</Button></Card.Link>
                </Card.Body>
            </Card>
        </Col>
    )
}
export default User