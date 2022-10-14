import {useContext} from 'react';
import AuthContext from '../../Authentication/AuthContext';

const useAuth = () =>{
    return useContext(AuthContext)
}

export default useAuth ;