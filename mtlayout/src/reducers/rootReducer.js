const initState = {
    sections: [],
    albums: [],
    tours: [],
    compositions: [],
    loading:true,
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_SECTIONS': {
            return {
                ...state,
                sections: state.sections.concat(action.object)
            }
        }
        case 'SET_ALBUMS': {
            return {
                ...state,
                albums: state.albums.concat(action.object)
            }
        }
        case 'SET_TOURS': {
            return {
                ...state,
                tours: state.tours.concat(action.object)
            }
        }
        case 'SET_COMPOSITIONS':{
            return{
                ...state,
                compositions:state.compositions.concat(action.object)
            }
        }
        case 'LOADING_APP':{
            return{
                ...state,
                loading:action.object,
            }
        }
        default:
            return state;
    }
}

export default rootReducer;