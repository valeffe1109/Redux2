import { createStore, compose, applyMiddleware } from "redux";
import playlistReducer from "../reducers/playlist";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  playlist: {
    songs: []
  },
 
};




export default function configureStore(){
    return createStore(playlistReducer,initialState,
        composeEnhancers(applyMiddleware(thunk)))
}







