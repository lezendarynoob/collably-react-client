const initState = {
    projects: [],
    searchProjects: [],
    searchTags: []
}

const projectReducer = (state = initState, action) => {
    if(action.type === 'GET_PROJECTS'){
        return {
            ...state,
            projects: action.projects
        }
    }
    if(action.type === 'CREATE_PROJECT'){
        let newProjects = [...state.projects, action.project];
        return {
            ...state,
            projects: newProjects
        }
    }
    if(action.type === 'ADD_TAG'){
        let taglist = [...state.searchTags, action.tag];
        return {
            ...state,
            searchTags: taglist
        }
    }
    if(action.type === 'REMOVE_TAG'){
        let taglist = state.searchTags.filter(tag => tag !== action.tag);
        return {
            ...state,
            searchTags: taglist
        }
    }
    if(action.type === 'SEARCH_PROJECTS'){
        
        return {
            ...state,
            searchProjects: action.projects
        }
    }

    return state;

}

export default projectReducer;