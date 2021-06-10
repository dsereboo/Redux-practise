const initialUsers={users:[
    {id:"dsnkn768", name:"Daniel", age:"15", grade:"9"},
    {id:"ds66n768", name:"Abena", age:"17", grade:"10"},
    {id:"ds99n768", name:"Adwoa", age:"17", grade:"10"}]}


const usersReducer=(state=initialUsers, action)=>{
    switch(action.type){
        case "ADD_USER":
            return{...state, users:[...state.users, action.payload]};
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