import transport from '../config/transport';

const logout = () => {
    return async (dispatch) => {
        try{
            let res = await transport.get('http://localhost:4000/auth/logout');
            if(res.data.message === 'done'){
                dispatch({type: 'LOGOUT'});
            }
        }
        catch(e){
            console.log(e);
        }
    };
}

export default logout;