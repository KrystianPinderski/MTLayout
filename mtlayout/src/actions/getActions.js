export const setSections = (object) => {
    return {
        type: 'SET_SECTIONS',
        object
    }
}

export const setAlbums = (object) =>{
    return{
        type:'SET_ALBUMS',
        object
    }
}

export const setTours = (object) =>{
    return{
        type:'SET_TOURS',
        object
    }
}
export const setCompositions = (object)=>{
    return{
        type:'SET_COMPOSITIONS',
        object
    }
}

export const loadingState = (object)=>{
    return{
        type:'LOADING_APP',
        object
    }
}