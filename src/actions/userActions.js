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
export const deleteUser=(userId)=>{
    return(dispatch, state, {getFirestore})=>{
        //async call to firebase to return result
        const db= getFirestore()
        //delet data from firestore collection using the firestore objcet
        db.collection("users").doc(userId).delete()
        .then( (response)=>{
            dispatch({type:"DELETE_USER",payload:userId})
            
        })
        .catch(
            (err)=>{
                console.log("Error handling for delet user action")
            }
        )
    }
}


export const editUser=(updatedUser,userId)=>{
    return(dispatch,state, {getFirestore})=>{
        //async call to firebase to create project and return the result
        const db= getFirestore();
        //edit data from firestore collection using firestore object
        db.collection("users").doc(userId)
            .set(updatedUser)
            .then(
                ()=>{
                    dispatch({type:"EDIT_USER", payload:updatedUser})
                    
                }
            )
            .catch(
                ()=>{
                    console.log("Error deleting docuent")
                }
            )

    }
}

export const getUsers = () => {
  return (dispatch, state, { getFirestore }) => {
    //async call to firebase to create project and return the result
    const db = getFirestore();
    //add data to firestore collection using the firestore object
    db.collection("users")
      .get()
      .then((response) => {
        let users = [];
        response.forEach((item) => {
          users.push({ ...item.data(), id:item.id });
        });
        dispatch({ type: "GET_USERS", payload: users });
      })
      .catch((err) => {
        //Log for an error
        console.log(err);
      });
  };
};

export const addUser = (user) => {
  return (dispatch, state, { getFirestore }) => {
    //async call to firebase to create project and return the result
    const db = getFirestore();
    //add data to firestore collection using the firestore object
    db.collection("users")
      .add(user)
      .then(() => {
        //When async call is successful dispatch redux action
        dispatch({ type: "ADD_USER", payload: user });
      })
      .catch((err) => {
        //if async call fails, log to error log or some mechanism
        console.log(err);
      });
    //asynchronous call to firebase to create users and return result
  };
};
