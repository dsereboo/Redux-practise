const initialUsers={users:[]}


const usersReducer=(state=initialUsers, action)=>{
    switch(action.type){
        case "ADD_USER":
            return{...state, users:[...state.users, action.payload]};
        case "GET_USERS":
            let users=action.payload
            return{users: users};
        case "EDIT_USER":
            let EditId= action.payload.id
            let updatedUsers= state.users.map((user)=> user.id===EditId? action.payload:user)
            return{users:updatedUsers}
        case "DELETE_USER":
            let id=action.payload
            let undeletedUsers=state.users.filter((user)=>user.id!==id)
            return{users: undeletedUsers}
           
        default:
            return state;

    }
}

export default usersReducer