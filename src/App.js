import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import {deleteUser} from "./actions/userActions"
import {connect} from "react-redux"
import Router from './Router';




function App(props) {
  

  // const addUser=(user)=>{
  //   //user.id=Math.floor(Math.random()*100).toString()
  // }

  // const deleteUser=(id)=>{
  //   //const undeletedUsers=users.filter(user=> user.id!==id)
  //   //setUsers(undeletedUsers)
  //   //props.deleteUser(id)
  // }

  // const editUser=(id, updatedUser)=>{
  //   //setUsers( 
  //     //users.map(user=> user.id ===id? updatedUser: user)
  //   //)
  //   //props.editUser(updatedUser)
  // }
  

  return (
     <Router/>
    
  )
}

const mapDispatchToProps={deleteUser:""}
    
export default connect(null, mapDispatchToProps)(App);
