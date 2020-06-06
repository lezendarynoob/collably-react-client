import transport from '../config/transport';

const searchProjects = () => {
    return async (dispatch, getState) => {
        try{
            let tagString = getState().project.searchTags.length > 0 ? getState().project.searchTags[0] : '';
            for( let i=1; i< getState().project.searchTags.length; i++){
                tagString += '+' + getState().project.searchTags[i]
            }
            let res = await transport.get('http://localhost:4000/project/search', {
                params: {
                    tags: tagString
                }
            });
            dispatch({type: 'SEARCH_PROJECTS', projects: [...res.data.projects]});
        }
        catch(e) {
            console.log(e);
        }
    }
}

export default searchProjects;