export const handleAddToPlayList = id => {
    return async (dispatch,getState) =>{
        dispatch({
            type:"ADD_ITEM_TO_PLAYLIST",
            payload:id
        })
    }
}