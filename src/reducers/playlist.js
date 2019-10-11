export default function (state = {},action){
    switch(action.type){
        case 'ADD_ITEM_TO_PLAYLIST':
        return{
            ...state,
            playlist:{
                ...state.playlist,
                songs:state.playlist.songs.concat(action.payload)
            }
        }
        default:
            return state;
        
    }
}
