/*export function addUser(newUser){
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
}*/

export const getUsers=()=>{
    return(dispatch,state,{getFirestore})=>{
      //async call to firebase to create project and return the result
      const db=getFirestore() ;
      //add data to firestore collection using the firestore object
      db.collection('users').get()
      .then(
          (response)=>{
              let users=[]
              response.forEach(
                  
                  (item)=>
                  {users.push(item.data())}
              )
              console.log(users)
              dispatch({type:"GET_USERS", payload:users,}) 
          }

      )
      .catch(
          (err)=>{
              //Log for an error
              console.log(err)
          }
          ) 
    
    }
}


export const addUser=(user)=>{
    return(dispatch,state,{getFirestore})=>{
        //async call to firebase to create project and return the result
        const db=getFirestore() ;
        //add data to firestore collection using the firestore object
        db.collection('users').add(user)
        .then(
            ()=>{
                //When async call is successful dispatch redux action
                dispatch({type: "ADD_USER", payload: user,});
            }
        )
        .catch(
            (err)=>{
                //if async call fails, log to error log or some mechanism
                console.log(err)
            }
        )
        //asynchronous call to firebase to create users and return result
       
    }

}


