import transport from '../config/transport';

const authCheck = () => {
    return async(dispatch) => {
        try{
            let res = await transport.get('http://localhost:4000/auth/isAuthenticated');
            dispatch({type: 'AUTH_CHECK', status: res.data.isAuthenticated});
        }
        catch(err){
            console.log(err);
        }
    }
}

export default authCheck;