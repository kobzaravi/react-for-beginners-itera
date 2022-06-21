import { useState } from "react";

export const AppUser = () => {

    const [state, setState] = useState({isAdmin: false, userName: "Olga"})
    const {isAdmin} = state;
  
    const assignAdmin = () =>{
        setState({...state, isAdmin: true})
        console.log('test');
    }
    return (
    <>
        <h1> Hello user, you is {isAdmin ? "Super Admin" : "a user"} </h1>
        <button onClick={assignAdmin}>Assign admin</button>
    </>        
    );
};  