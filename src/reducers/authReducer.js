const initState = {
    isAuthenticated: false,
};

const authReducer = (state = initState, action) => {
    if(action.type === 'AUTH_CHECK'){
        return {
            ...state,
            isAuthenticated: action.status
        };
    }
    if(action.type === 'LOGOUT'){
        return {
            ...state,
            isAuthenticated: false
        };
    }
    if(action.type === 'LOGIN'){
        return {
            ...state,
            isAuthenticated: true
        };
    }

    return state;
};

export default authReducer;