export function addUser(newUser){
    return{
        type:"ADD_USER",
        payload:newUser,
    }
}


export function editUser(updatedUser){
    return{
        type:"EDIT_USER",
        payload: updatedUser,
    }
}

export function deleteUser(userId){
    return{
        type:"DELETE_USER",
        payload: userId,
    }
}


