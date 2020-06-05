import transport from '../config/transport';

const getProjects = () => {
    return async (dispatch) => {
        try{
            let res = await transport.get('http://localhost:4000/project/getProjects');
            dispatch({type: 'GET_PROJECTS', projects: res.data.projects});

        }
        catch(e) {
            console.log(e);
        }
    }
}

export default getProjects;