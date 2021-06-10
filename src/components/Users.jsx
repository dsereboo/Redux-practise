import React from "react"
import {connect} from "react-redux"
import { Container, Row } from "react-bootstrap"
import User from "./User"


const Users=(props)=>{
    return(
        <Container>
            <Row>
                {props.users.map(user=>(
                    <User userInfo={user} key={user.id} deleteUser={props.deleteUser} editUser={props.editUser}/>
                ))}
            </Row>
        </Container>
    )
}

const mapStateToProps=(state)=>{
    return{
        users: state.users,
    }
}
export default connect(mapStateToProps, {})(Users)