import React from "react"
import {connect} from "react-redux"
import { Container, Row } from "react-bootstrap"
import { getUsers } from "../actions/userActions"
import User from "./User"
import { useEffect } from "react"


const Users=(props)=>{

    useEffect(
        ()=>{props.getUsers()},
        []
    )

   console.log('usersatMap',props.users)

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
    //console.log(state)
    return{
        users: state.users.users,
    }
}

const mapDispatchToProps={
    getUsers,
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)