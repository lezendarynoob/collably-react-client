const initState = {
    projects: []
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

    return state;

}

export default projectReducer;