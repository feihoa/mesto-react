import React from 'react';
import * as secretToken from './secretToken';
import { useParams, useHistory } from 'react-router-dom'; 


function AuthChecker(props){
return  AuthChecker = (props) => {
    const history = useHistory(); 

    if (props.jwt === secretToken.secretToken){
        props.history.push("/user");

        return true;
        
    }else{
        return false;
    }
}
}
export default AuthChecker;