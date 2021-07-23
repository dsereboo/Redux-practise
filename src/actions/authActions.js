export const signUp=(email, password)=>{
    return(dispatch, state, {getFirebase})=>{
        //Return firebase 
        const firebase= getFirebase()
        //Access auth object of firebase which has the function to create a user
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(
            (response)=>{console.log(response)}
        )
        .catch(
            (error)=>{console.log(error)}
        )

    }
}

export const signIn=(email, password)=>{
    return(dispatch, state, {getFirebase})=>{
        //Return firebase 
        const firebase= getFirebase()
        //Access auth object of firebase which has the function to create a user
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(
            (response)=>{console.log(response)}
        )
        .catch(
            (error)=>{console.log(error)}
        )

    }
}

export const signOut=()=>{
    return(dispatch, state, {getFirebase})=>{
        //Return firebase 
        const firebase= getFirebase()
        //Access auth object of firebase which has the function to create a user
        firebase.auth().signOut()
        .then(
            (response)=>{console.log(response)}
        )
        .catch(
            (error)=>{console.log(error)}
        )

    }
}

export const googleSignIn=()=>{
    return(dispatch,state, {getFirebase})=>{
        //Return firebase
        const firebase= getFirebase()
        //Setup a provider for Google authentication
        var provider = new firebase.auth.GoogleAuthProvider();
        //Firebase function to sign in with a pop up
        firebase.auth().signInWithPopup(provider)
        .then(
            (result)=>{
                // let credential= result.credential
                let user = result.user
                console.log(user)
            }
        )
        .catch(
            (error)=>{console.log(error)}
        )
    }
}

