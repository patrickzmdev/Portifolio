import React, { useContext } from 'react'
import { UserContext } from '../../contexts/userContexts';

function Profile(){
    const{login}= useContext(UserContext);
    return(
        <div>
            {login? 'dados de usuario' : 'Faça seu login para ter acesso as informacões'}
        </div>
    )
}

export default Profile;