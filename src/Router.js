import {BrowserRouter, Route} from "react-router-dom"
import Homepage from "./components/Homepage";
import Login from './components/Login';
import ProtectedRoute from "./components/ProtectedRoute";
import SignUp from "./components/SignUp";


const Router=()=>{
    return (
      <BrowserRouter>
        <Route path="/login" component={Login} />
        <Route path="/signUp" component={SignUp}/>
        <ProtectedRoute path="/"  exact component={Homepage}/>
      </BrowserRouter>
    );
}


export default Router