const initialUsers={
    users: [
        {id:"dsnkn768", name:"Daniel", age:"15", grade:"9"},
        {id:"ds66n768", name:"Abena", age:"17", grade:"10"},
        {id:"ds99n768", name:"Adwoa", age:"17", grade:"10"}
      ]
    }


const usersReducer=(state=initialUsers, action)=>{
    switch(action.type){
        case "ADD_USER":
           // itemId=Math.floor(Math.random()*100).toString()
            const user={
                name: action.payload.name,
                age: action.payload.age,
                grade: action.payload.grade,
            }
            return {...state, users:[...state.users, user]}
        default:
            return state;

    }
}

export default usersReducer