import {createStore,applyMiddleware, compose, combineReducers} from "redux"
import usersReducer from "../reducers/usersReducer"
import thunk from "redux-thunk"
//Firebase imports
import { getFirebase, reduxReactFirebase } from 'react-redux-firebase';
import { getFirestore, reduxFirestore,firestoreReducer } from 'redux-firestore';
import firebase from "../config"

//Using the combine method to put together all existent reducers and return as a single one
const combinedReducers=combineReducers({
    users: usersReducer,
    firestore: firestoreReducer,
})

//Modifying our store to connect with firebase firestore
export const store= createStore(
    combinedReducers, 
    //
    compose(
        //Note
        applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
        //Note
        reduxFirestore(firebase),
        //Note
        reduxReactFirebase(firebase)
    ))