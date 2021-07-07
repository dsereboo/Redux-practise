import React from "react"
import {connect} from "react-redux"
import{Route, Redirect} from "react-router-dom"

const ProtectedRoute=({component: Component,auth, ...otherProps})=>{
    return(
        <Route
            {...otherProps}
            render={(props)=>{
                //check if user is logged in
                if (auth.isLoaded && !auth.isEmpty){
                    return(
                        <Component {...props}/>
                    )
                }
                else if( !auth.isLoaded){
                    return(<h1>Page loading</h1>)
                }
                else{
                    return(
                        <Redirect to="/login"/>
                    )
                   
                }
            }}
        />
    )
}

const mapStateToProps=(state)=>{
    return{
        auth:state.firebase.auth,
    }
}

export default connect(mapStateToProps, null)(ProtectedRoute)