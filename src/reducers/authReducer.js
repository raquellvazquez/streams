import {SIGN_IN, SIGN_OUT} from '../actions/types';

const initialState = {
    isSignedIn: null,
    idUser: null,
}

export default ( state = initialState, action ) =>{
    switch(action.type) {
        case SIGN_IN : 
            return {
                ...state,
                isSignedIn: true,
                idUser: action.payload
            }
        case SIGN_OUT : 
        return {
            ...state,
            isSignedIn: false,
            idUser: null
        }
        default :
            return state
    }
}